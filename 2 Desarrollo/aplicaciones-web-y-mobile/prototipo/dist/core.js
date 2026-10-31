(function(root){
 'use strict';
 const norm=s=>String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const money=n=>n===null||n===undefined?'Pendiente':new Intl.NumberFormat('es-AR',{maximumFractionDigits:2}).format(n)+' PO';
 const uid=()=>globalThis.crypto?.randomUUID?.()||'local-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
 const visible=(entry,campaign)=>!entry.scope?.length||entry.scope.includes(campaign);
 const initial=()=>({version:1,campaign:'free',campaigns:[{id:'free',name:'Mesa libre',description:'Base compartida. Sin reglas de Romanance.'},{id:'romanance',name:'Romanance',description:'Caso de estudio con comerciantes documentados. Rocío pendiente de conciliación.'}],entries:[],merchants:[{id:'general',name:'Mercado general',scope:[],categories:['Armas','Armaduras','Herramientas','Equipo'],tools:[],note:'Consulta libre. El DM decide disponibilidad; sin inventario de campaña precargado.',forge:false},{id:'tomor',name:'Tömörbaatar',scope:['romanance'],categories:['Armas','Armaduras'],tools:['Herramientas de herrero'],note:'La Llama Eterna · Yunque Certero: precio ÷ 20 para fabricación no mágica. Marca de la Llama Eterna documentada; no se aplica automáticamente en este prototipo.',forge:true},{id:'batai',name:'Batai',scope:['romanance'],categories:['Armas','Armaduras'],tools:['Herramientas de herrero'],note:'Armera; armas a pedido. Sin reducción propia de tiempo. Fuente: PNJs principales.',forge:false},{id:'ethen',name:'Ethen',scope:['romanance'],categories:['Equipo'],tools:['Kit de herbolario'],note:'Herborista. Rocío de Ethen detenido: guía recibida y canon activo difieren en efecto y elaboración. Sin receta activa hasta conciliación.',forge:false},{id:'temay',name:'Temay',scope:['romanance'],categories:['Armas','Armaduras','Herramientas','Equipo'],tools:[],note:'Mercader Errante. El DM puede aplicar hasta 25% favorable por negociación. No fabrica por defecto. Su inventario no está fijado por el canon.',forge:false}],shops:{},loot:[],disabled:{}});
 const effective=(entries,campaign,disabled={})=>entries.filter(e=>visible(e,campaign)&&!(disabled[campaign]||[]).includes(e.id)&&!(campaign==='romanance'&&e.english==='Potion of Healing'));
 function craft(entry,merchant,qty=1){
  if(!Number.isInteger(qty)||qty<1||qty>10000)return {error:'La cantidad debe ser de 1 a 10000.'};
  if(entry.craftMode==='none'||!entry.craftMode)return {error:'Sin receta calculable. El DM puede definir una variante homebrew.'};
  if(!entry.tool)return {error:'Herramienta requerida pendiente de definir.'};
  if(!merchant.tools.includes(entry.tool))return {error:'Este comerciante no tiene registrada la herramienta requerida: '+entry.tool+'.'};
  if(entry.craftMode==='manual'){
   if(!Number.isFinite(entry.days)||entry.days<=0||!Number.isFinite(entry.materials)||entry.materials<0)return {error:'La receta propia necesita días y costo de materiales.'};
   return {days:entry.days*qty,materials:Math.round(entry.materials*qty*100)/100,rule:'Receta propia · por unidad',tool:entry.tool};
  }
  if(entry.craftMode==='healing')return {days:qty,materials:25*qty,rule:'SRD · Brewing Potions of Healing · 8 horas por día',tool:entry.tool};
  if(entry.magic)return {error:'La fabricación común no corresponde a un objeto mágico.'};
  if(entry.price===null||!Number.isFinite(entry.price))return {error:'Precio base pendiente; no se puede calcular la fabricación.'};
  const forge=merchant.forge&&['Armas','Armaduras'].includes(entry.category);
  return {days:qty*Math.max(1,Math.ceil(entry.price/(forge?20:10))),materials:qty*Math.floor(entry.price/2),rule:forge?'Yunque Certero · precio ÷ 20, redondeo a día completo para esta prueba':'SRD · precio ÷ 10, redondeado hacia arriba · 8 horas por día',tool:entry.tool};
 }
 function total(lines,entries,discount=0){
  let copper=0,pending=0;
  for(const line of lines){const entry=entries.find(e=>e.id===line.id);if(!entry||entry.price===null){pending++;continue;}copper+=Math.round(entry.price*100)*line.qty;}
  return {amount:Math.round(copper*(1-discount/100))/100,pending};
 }
 function stock(entries,floor=0,count=8,random=Math.random){
  const result={};for(const e of entries)if(floor>0)result[e.id]=floor;
  const pool=[...entries];for(let i=pool.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  for(const e of pool.slice(0,count))result[e.id]=(result[e.id]||0)+1+Math.floor(random()*3);
  return result;
 }
 function validate(data){
  const fail=message=>{throw new Error(message);};
  const str=(v,max=30000)=>typeof v==='string'&&v.length<=max;
  const finite=(v,min,max)=>typeof v==='number'&&Number.isFinite(v)&&v>=min&&v<=max;
  if(!data||data.version!==1)fail('Versión de respaldo no admitida.');
  if(!Array.isArray(data.campaigns)||!data.campaigns.length||data.campaigns.length>100)fail('Campañas inválidas.');
  const campaigns=new Set();for(const c of data.campaigns){if(!str(c.id,150)||!c.id||campaigns.has(c.id)||!str(c.name,180)||!c.name.trim()||!str(c.description))fail('Campaña inválida.');campaigns.add(c.id);}
  if(!campaigns.has(data.campaign))fail('Campaña activa inexistente.');
  const scope=s=>Array.isArray(s)&&s.every(id=>campaigns.has(id));
  if(!Array.isArray(data.entries)||data.entries.length>10000)fail('Biblioteca propia inválida.');
  const ids=new Set();for(const e of data.entries){if(!str(e.id,150)||!e.id.startsWith('custom:')||ids.has(e.id)||!str(e.name,180)||!e.name.trim()||!str(e.description)||!str(e.attributes,5000)||!str(e.category,100)||!['item','spell','rule','feat','background','species','class','subclass'].includes(e.type)||!scope(e.scope)||(e.price!==null&&!finite(e.price,0,1e9))||typeof e.loot!=='boolean'||typeof e.magic!=='boolean'||!['none','common','manual'].includes(e.craftMode)||!str(e.tool,100)||!str(e.origin,500)||!str(e.status,150)||!str(e.parent,200)||(e.days!==null&&!finite(e.days,.01,100000))||(e.materials!==null&&!finite(e.materials,0,1e9)))fail('Ficha propia inválida.');ids.add(e.id);}
  if(!Array.isArray(data.merchants)||data.merchants.length>500)fail('Comerciantes inválidos.');
  const merchants=new Set();for(const m of data.merchants){if(!str(m.id,150)||!m.id||merchants.has(m.id)||!str(m.name,180)||!m.name.trim()||!scope(m.scope)||!Array.isArray(m.categories)||!m.categories.every(c=>str(c,100))||!Array.isArray(m.tools)||!m.tools.every(t=>str(t,100))||!str(m.note,5000)||typeof m.forge!=='boolean')fail('Comerciante inválido.');merchants.add(m.id);}
  if(!data.shops||typeof data.shops!=='object'||Array.isArray(data.shops))fail('Mercados inválidos.');
  for(const [key,s] of Object.entries(data.shops)){const parts=key.split('|');if(parts.length!==2||!campaigns.has(parts[0])||!merchants.has(parts[1])||!['manual','random'].includes(s.mode)||!Number.isInteger(s.floor)||s.floor<0||s.floor>100||!finite(s.discount,0,25)||!s.stock||typeof s.stock!=='object'||Array.isArray(s.stock)||!Object.entries(s.stock).every(([id,n])=>str(id,200)&&Number.isInteger(n)&&n>=0&&n<=10000)||!Array.isArray(s.cart)||s.cart.length>10000||!s.cart.every(l=>str(l.id,200)&&Number.isInteger(l.qty)&&l.qty>=1&&l.qty<=10000))fail('Stock o compra inválidos.');}
  if(!Array.isArray(data.loot)||data.loot.length>500||!data.loot.every(l=>str(l.id,150)&&campaigns.has(l.campaign)&&str(l.date,100)&&Number.isFinite(Date.parse(l.date))&&Array.isArray(l.items)&&l.items.length<=100&&l.items.every(i=>str(i.id,200)&&str(i.name,180)&&str(i.description)&&str(i.origin,500)&&(i.price===null||finite(i.price,0,1e9)))))fail('Historial de loot inválido.');
  if(!data.disabled||typeof data.disabled!=='object'||Array.isArray(data.disabled)||!Object.entries(data.disabled).every(([id,list])=>campaigns.has(id)&&Array.isArray(list)&&list.every(e=>str(e,200))))fail('Exclusiones inválidas.');
  return data;
 }
 const api={norm,money,uid,visible,initial,effective,craft,total,stock,validate};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.BotinCore=api;
})(typeof window==='undefined'?globalThis:window);
