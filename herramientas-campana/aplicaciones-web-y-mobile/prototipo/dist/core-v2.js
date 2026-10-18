(function(root){'use strict';
 const Legacy=root.BotinCore;
 const norm=s=>String(s??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 const uid=()=>globalThis.crypto?.randomUUID?.()||'local-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
 const TYPES={item:'Objeto',service:'Servicio',spell:'Conjuro',rule:'Regla',feat:'Dote',background:'Trasfondo',species:'Especie / linaje',class:'Clase',subclass:'Subclase'};
 const RARITIES=['Común','Infrecuente','Raro','Muy raro','Legendario'];
 const RKEYS=['comun','poco_comun','raro','muy_raro','legendario'];
 const WEIGHTS=[[54,37,9,0,0],[30,51,17,2,0],[11,23,36,23,7],[0,0,20,44,36]];
 const COINS=[['ppt','PPT',1000],['po','PO',100],['pe','PE',50],['pp','PP',10],['pc','PC',1]];
 const BASE_COINS=[['po','PO',100],['pp','PP',10],['pc','PC',1]];
 function defaultCurrency(context){return{platinum:false,electrum:false,custom:context==='romanance'?[{key:'luz-aurora',name:'Luz de Aurora',value:5,enabled:false},{key:'luz-zenith',name:'Luz del Zenith',value:50,enabled:false},{key:'luz-ocaso',name:'Luz del Ocaso',value:500,enabled:false}]:[]};}
 function ensureCurrencies(d){if(d.currencies==null)d.currencies={};for(const c of d.campaigns||[])if(!Object.hasOwn(d.currencies,c.id))Object.defineProperty(d.currencies,c.id,{value:defaultCurrency(c.id),writable:true,enumerable:true,configurable:true});return d;}
 function currencyList(d,context=d.campaign,all=false){const prefs=d.currencies?.[context]||defaultCurrency(context),custom=prefs.custom||[];return [...BASE_COINS,...(all||prefs.platinum?[COINS[0]]:[]),...(all||prefs.electrum?[COINS[2]]:[]),...custom.filter(c=>all||c.enabled).map(c=>[c.key,c.name,c.value])].sort((a,b)=>b[2]-a[2]||(Number(b[0].startsWith('luz-'))-Number(a[0].startsWith('luz-'))));}
 function currencyValue(coins,list){let sum=0;for(const [key,count]of Object.entries(coins)){const unit=list.find(c=>c[0]===key);if(!unit&&count!==0)throw Error('Moneda sin equivalencia en este contexto.');if(!Number.isSafeInteger(count)||count<0||count>1e9)throw Error('Las monedas deben ser cantidades enteras y no negativas.');if(unit)sum+=count*unit[2];}if(!Number.isSafeInteger(sum))throw Error('Importe fuera de precisión admitida.');return sum;}
 function changeIn(copper,list){if(!Number.isSafeInteger(copper)||copper<0)throw Error('Importe monetario inválido.');const coins={};for(const [key,,value]of list){coins[key]=Math.floor(copper/value);copper%=value;}if(copper)throw Error('Las monedas habilitadas no permiten un vuelto exacto.');return coins;}
 const currencyText=(coins,list)=>list.filter(([key])=>coins[key]).map(([key,label])=>coins[key]+' '+label).join(' · ')||'0 PC';
 function currencyPayment(gold,coins,d){const enabled=currencyList(d);currencyValue(coins,currencyList(d,d.campaign,true));const paid=currencyValue(Object.fromEntries(enabled.map(([key])=>[key,coins[key]||0])),enabled),due=cp(gold),difference=paid-due;return{short:difference<0?-difference/100:0,change:difference<0?null:changeIn(difference,currencyList(d)),paid:paid/100,due:due/100};}
 function displayMoney(gold,d){if(gold==null)return 'Pendiente';const list=currencyList(d),copper=cp(Math.abs(gold));return(gold<0?'−':'')+currencyText(changeIn(copper,list),list);}
 const tier=level=>level<=4?0:level<=10?1:level<=16?2:3;
 const cp=gold=>Math.round(gold*100);
 const money=n=>n==null?'Pendiente':new Intl.NumberFormat('es-AR',{maximumFractionDigits:2}).format(n)+' PO';
 const visible=(e,c)=>!e.scope?.length||e.scope.includes(c);
 const initial=()=>{const d=Legacy.initial();return migrate(d);};
 const settings=()=>({level:3,cr:2,kind:'personal',count:1,source:'Cofre',difficulty:'Media',ratio:1,magicPct:15,maxMagic:1,autoWeights:true,weights:[...WEIGHTS[0]],artifacts:false,artifactPct:1,title:''});
 function migrate(input){
  const d=structuredClone(input);
  if(d.version===1){Legacy.validate(d);d.version=2;d.settings=settings();d.theme='verde';d.electrum=true;d.dice={family:'armamento',rarity:'comun'};d.hiddenLoot=[];d.campaigns.forEach(c=>{if(c.id==='romanance')c.description='Contexto de contenido y reglas de Romanance.';});d.merchants.forEach(m=>{if(m.id==='ethen')m.note='Herborista. Rocío de Ethen: 7 días, 25 PO; decisión del autor 2026-10-14. Precio de venta pendiente.';});}
  return ensureCurrencies(d);
 }
 function effective(entries,campaign,disabled={}){
  let list=entries.filter(e=>visible(e,campaign)&&!(disabled[campaign]||[]).includes(e.id));
  const replacements=list.filter(e=>e.replacement&&e.parent);
  const conflicts=replacements.filter(e=>replacements.some(o=>o.id!==e.id&&o.parent===e.parent));
  if(conflicts.length)throw Error('Hay modificaciones activas en conflicto sobre una misma ficha. Desactivá una desde Contexto.');
  // El mundo de Romanance reemplaza todas las pociones de curación; variantes superiores sin ficha quedan fuera.
  if(campaign==='romanance')list=list.filter(e=>!/^Potion of Healing|^Poción de curación/i.test(e.english||e.name)||replacements.some(r=>r.parent===e.id));
  const overridden=new Set(replacements.map(e=>e.parent));
  return list.filter(e=>!overridden.has(e.id));
 }
 function breakdown(copper,electrum=true){
  if(!Number.isSafeInteger(copper)||copper<0)throw Error('Importe monetario inválido.');
  const coins={ppt:0,po:0,pe:0,pp:0,pc:0};
  for(const [key,,value]of COINS){if(key==='pe'&&!electrum)continue;coins[key]=Math.floor(copper/value);copper%=value;}return coins;
 }
 const coinText=coins=>COINS.filter(([k])=>coins[k]).map(([k,label])=>`${coins[k]} ${label}`).join(' · ')||'0 PC';
 function coinValue(coins){let result=0;for(const [key,,value]of COINS){const n=coins[key]??0;if(!Number.isSafeInteger(n)||n<0||n>1000000000)throw Error('Las cantidades de monedas deben ser enteras y positivas.');result+=n*value;}return result;}
 function payment(totalGold,coins,electrum=true){const paid=coinValue(coins),due=cp(totalGold),difference=paid-due;return {paid:paid/100,due:due/100,short:difference<0?-difference/100:0,change:difference>=0?breakdown(difference,electrum):null};}
 function total(lines,entries,discount=0){let copper=0,pending=0;for(const l of lines){const e=entries.find(e=>e.id===l.id);if(!e||e.price==null){pending++;continue;}copper+=cp(e.price)*l.qty;}return{amount:Math.round(copper*(1-discount/100))/100,pending};}
 const sample=(a,random=Math.random)=>a[Math.floor(random()*a.length)];
 const roll=(n,sides,random=Math.random)=>Array.from({length:n},()=>1+Math.floor(random()*sides)).reduce((a,b)=>a+b,0);
 function stock(entries,floor=0,count=8,random=Math.random){const result={};for(const e of entries)if(floor)result[e.id]=floor;const pool=[...entries];for(let i=pool.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}for(const e of pool.slice(0,count))result[e.id]=(result[e.id]||0)+1+Math.floor(random()*3);return result;}
 const gems=[['Turquesa',10],['Ágata musgosa',10],['Azurita',10],['Cornalina',50],['Ónice',50],['Citrino',50],['Ámbar',100],['Granate',100],['Perla',100],['Peridoto',500],['Topacio',500],['Perla negra',500],['Esmeralda',1000],['Ópalo',1000],['Zafiro azul',1000],['Diamante',5000]];
 function wealth(gold,random=Math.random){
  const budget=cp(gold);let remaining=budget;const valuables=[];
  for(let i=0,n=1+Math.floor(random()*4);i<n;i++){
   const choices=[...gems.map(([name,price])=>({name,price,category:'Gema'})),...[25,250,750,2500,7500].map(price=>({name:'Obra de arte · '+money(price),price,category:'Arte'}))].filter(e=>cp(e.price)<=remaining);
   if(!choices.length)break;const e=sample(choices,random);valuables.push({...e,qty:1});remaining-=cp(e.price);
  }
  return {budget:budget/100,valuables,coins:changeIn(remaining,BASE_COINS)};
 }
 function treasureBudget(s,random=Math.random){
  const b=tier(s.cr),personal=[[3,6,1],[2,8,10],[2,10,100],[2,8,1000]],hoard=[[2,4,100],[8,10,100],[8,8,1000],[6,10,10000]];
  const [n,sides,mult]=(s.kind==='personal'?personal:hoard)[b];return roll(n,sides,random)*mult*(s.kind==='personal'?s.count:1);
 }
 function rarity(level,weights=null,random=Math.random){
  const t=tier(level),max=[2,3,4,4][t],w=(weights||WEIGHTS[t]).map((n,i)=>i>max?0:n),sum=w.reduce((a,b)=>a+b,0);if(!sum)return null;
  let r=random()*sum;for(let i=0;i<w.length;i++){r-=w[i];if(r<0)return i;}return max;
 }
 function referenceGroup(e){if(e.type!=='item')return e.category||TYPES[e.type];if(e.itemGroup)return e.itemGroup;const text=norm((e.description||'').slice(0,350)),name=norm(e.name),category=e.category;if(category&&category!=='Objetos mágicos')return category;if(/^(armadura|armor|escudo|shield)\b/.test(text)||/^(armadura|escudo)\b/.test(name))return 'Armaduras';if(/^(arma|weapon|municion|ammunition)\b/.test(text)||/^(arma|espada|daga|hacha|martillo|municion|arco|maza|tridente|jabalina|garrote|cimitarra)\b/.test(name))return 'Armas';for(const [pattern,label]of [[/^(anillo|ring)\b/,'Anillos'],[/^(baston|staff)\b/,'Bastones'],[/^(pergamino|spell scroll|scroll)\b/,'Pergaminos'],[/^(pocion|aceite|potion|oil)\b/,'Pociones'],[/^(vara|rod)\b/,'Varas'],[/^(varita|wand)\b/,'Varitas'],[/^(objeto maravilloso|wondrous item)\b/,'Objetos maravillosos']])if(pattern.test(text)||pattern.test(name))return label;return 'Objetos mágicos · por clasificar';}
 function uniqueAttributes(e){const a=String(e.attributes||'').trim();return a&&norm(e.description||'').replace(/\s+/g,' ').includes(norm(a).replace(/\s+/g,' '))?'':a;}
 function randomDraft(entries,settings={},random=Math.random){const group=settings.group,pool=entries.filter(e=>e.type==='item'&&referenceGroup(e)===group),fixed=settings.baseId?pool.find(e=>e.id===settings.baseId&&!e.magic):null;if(settings.baseId&&!fixed)throw Error('La referencia debe pertenecer al tipo elegido y ser una base no mágica.');let source=fixed,entry;if(!source&&(!settings.magic||['Armas','Armaduras'].includes(group)))source=sample(pool.filter(e=>!e.magic),random);if(!source){const candidates=pool.filter(e=>e.magic===!!settings.magic&&e.description&&!/ficha descriptiva pendiente|referencia pendiente/i.test(e.description));source=sample(candidates,random);}if(!source)throw Error('No hay fichas disponibles para ese tipo y opción de magia.');entry=structuredClone(source);entry.attributes=uniqueAttributes(source);entry.parent=source.id;entry.replacement=false;entry.name=source.name+' · borrador';if(settings.magic&&!source.magic){entry.magic=true;entry.craftMode='magic';entry.needsBase=true;entry.consumable=false;entry.magicEffect='';entry.magicSpell=null;if(['Armas','Armaduras'].includes(group)){const bonus=1+Math.floor(random()*3),profile=bonusProfile(group,source.name,bonus);entry.enhancementBonus=bonus;entry.bonusEffect=profile.effect;entry.rarity=profile.rarity;}else{const spells=entries.filter(e=>e.type==='spell'&&Number(e.spell?.level??e.level??0)<=1);const spell=sample(spells,random);if(!spell)throw Error('No hay conjuros habilitados de nivel 0 o 1.');entry.enhancementBonus=0;entry.bonusEffect='';entry.rarity='Común';entry.magicSpell={id:spell.id,name:spell.name,level:Number(spell.spell?.level??spell.level??0),activation:'Según el conjuro',usage:'daily',uses:1,recovery:'Al amanecer',notes:''};entry.name=source.name+' · '+spell.name+' · borrador';}entry.price=magicValue(entry.rarity,false,source.price);}return{sourceId:source.id,entry};}
 const DESIGN_LIMITS=[{spell:1,bonus:0},{spell:3,bonus:1},{spell:5,bonus:2},{spell:8,bonus:3},{spell:9,bonus:4}];
 function spellPropertyText(s){if(!s)return '';const modes={atwill:'a voluntad',daily:`${s.uses} uso(s) por día`,charges:`${s.uses} carga(s)`,consumed:'se consume al lanzar el conjuro'};return [`Conjuro: ${s.name} (${s.level?'nivel '+s.level:'truco'}).`,`Activación: ${s.activation}. Uso: ${modes[s.usage]}.`,['daily','charges'].includes(s.usage)?`Recuperación: ${s.recovery}.`:'',s.notes].filter(Boolean).join('\n');}
 function magicGuidance(e){const limit=DESIGN_LIMITS[RARITIES.indexOf(e.rarity)],warnings=[];if(!e.magic||!limit)return warnings;if((e.enhancementBonus||0)>limit.bonus)warnings.push('La bonificación supera el máximo de la guía para esta rareza.');if(e.magicSpell?.level>limit.spell)warnings.push('El conjuro supera el nivel máximo de la guía para esta rareza.');if(e.rarity==='Común'&&e.magicSpell?.level===1&&e.magicSpell?.usage==='atwill')warnings.push('Conjuro de nivel 1 a voluntad: revisar poder y frecuencia antes de considerarlo común.');return warnings;}
 function entryText(e){const blocks=[];for(const value of [e.description,e.magicEffect,spellPropertyText(e.magicSpell),e.bonusEffect,e.attributes]){const text=String(value||'').trim(),key=norm(text).replace(/\s+/g,' ');if(text&&!blocks.some(block=>norm(block).replace(/\s+/g,' ').includes(key)))blocks.push(text);}return blocks.join('\n\n');}
 const snapshot=e=>({id:e.id,name:e.name,description:entryText(e),origin:e.origin||'',price:e.price??null,magic:!!e.magic,rarity:e.rarity||'Mundano',category:e.category||'',homebrew:!e.id.startsWith('srd:')&&!e.id.startsWith('dmg:')||!!e.parent,parent:e.parent||''});
 function generate(s,entries,tableData,mode='quick',random=Math.random){
  let gold=treasureBudget(s,random);
  if(mode==='manual')gold=Math.round(gold*s.ratio*({Trivial:.5,Fácil:.75,Media:1,Difícil:1.35,Mortal:1.75}[s.difficulty]||1)*100)/100;
  const result={...wealth(gold,random),items:[],warnings:[],mode,context:`Party ${s.level} · VD ${s.cr} · ${s.kind==='personal'?'Personal ×'+s.count:'Acumulado'} · ${mode==='quick'?'DMG':'Manual'}`};
  let n=0;
  if(mode==='quick'&&s.kind==='hoard')n=[()=>roll(1,4,random)-1,()=>roll(1,3,random),()=>roll(1,4,random),()=>roll(1,6,random)][tier(s.cr)]();
  if(mode==='manual')for(let i=0;i<s.maxMagic;i++)if(random()*100<s.magicPct)n++;
  for(let i=0;i<n;i++){
   const r=rarity(s.level,mode==='manual'&&!s.autoWeights?s.weights:null,random);if(r===null){result.warnings.push('Sin pesos de rareza elegibles.');break;}
   let picked;
   if(mode==='quick'){
    const family=sample(['armamento','instrumentos','arcanos','reliquias'],random),rows=tableData.tables[family+'|'+RKEYS[r]],d100=roll(1,100,random),row=rows.find(row=>d100>=row.start&&d100<=row.end);
    picked=entries.find(e=>e.id===row.itemId)||entries.find(e=>e.replacement&&e.parent===row.itemId);
    if(!picked){result.warnings.push(`${row.name}: excluido por las reglas del contexto; no se sustituyó por otra tirada.`);continue;}
   }else{
    const pool=entries.filter(e=>e.type==='item'&&e.loot&&e.magic&&e.rarity===RARITIES[r]);
    const artifacts=entries.filter(e=>e.type==='item'&&e.loot&&e.rarity==='Artefacto');
    picked=s.artifacts&&random()*100<s.artifactPct?sample(artifacts,random):sample(pool,random);
    if(!picked){result.warnings.push('No hay fichas habilitadas para '+RARITIES[r]+'.');continue;}
   }
   result.items.push(snapshot(picked));
  }
  if(mode==='manual'){
   const pool=entries.filter(e=>e.type==='item'&&!e.magic&&e.loot&&e.rarity!=='Artefacto');
   for(let i=0,n=Math.floor(random()*3);i<n&&pool.length;i++)result.items.push(snapshot(sample(pool,random)));
  }
  return result;
 }
 const MAGIC_COST=[50,200,2000,20000,100000],MAGIC_DAYS=[5,10,50,125,250];
 const SCROLL_COST=[15,25,100,150,1000,1500,10000,12500,15000,50000],SCROLL_DAYS=[1,1,3,5,10,25,40,50,60,120];
 function magicValue(rarity,consumable=false,basePrice=0){const i=RARITIES.indexOf(rarity);if(i<0||basePrice==null)return null;return [100,400,4000,40000,200000][i]*(consumable?.5:1)+basePrice;}
 function bonusProfile(category,name,bonus){
  if(!Number.isInteger(bonus)||bonus<1||bonus>5)throw Error('Bonificación mágica inválida.');
  if(!['Armas','Armaduras'].includes(category))throw Error('Estas bonificaciones corresponden a armas, armaduras y escudos.');
  const weapon=category==='Armas',shield=/escudo|shield/i.test(name),index=bonus+(weapon||shield?0:1);
  return{rarity:bonus<=3?RARITIES[index]:bonus===4?'Legendario':null,homebrew:bonus>4,designGuide:bonus===4,effect:weapon?`Bonificador +${bonus} a las tiradas de ataque y daño con esta arma mágica.`:`Bonificador +${bonus} a la CA ${shield?'además del bonificador normal del escudo':'mientras llevás esta armadura'}.`,source:bonus>4?'Excepción homebrew · rareza, costo y tiempo decididos por el DM':bonus===4?'DMG 2024 · guía de diseño: bonificador máximo +4 para legendarios':'SRD 5.2.1 ES · armas/armaduras p. 235; escudos p. 252'};
 }
 function craft(e,m=null,qty=1,options={}){
  if(!Number.isInteger(qty)||qty<1||qty>10000)return{error:'Cantidad inválida.'};
  if(e.type!=='item')return{error:'La fabricación corresponde a objetos, no a este tipo de contenido.'};
  if(e.enhancementBonus>4&&e.craftMode!=='manual')return{error:'Una bonificación +5 necesita una receta homebrew: costo y días definidos por el DM.'};
  if(e.enhancementBonus===4&&e.rarity!=='Legendario'&&e.rarity!=='Artefacto')return{error:'La guía de diseño del DMG sitúa la bonificación +4 en Legendario.'};
  const kind=e.craftMode||'none',requirements=[],tool=e.tool||'Herramienta asignada por el DM';
  let materials=0,days=0,baseCost=0,baseDays=0,rule='';
  if(kind==='manual'){if(!Number.isFinite(e.materials)||!Number.isFinite(e.days))return{error:'Definí materiales y tiempo de la receta propia.'};materials=e.materials;days=e.days;rule='Receta homebrew';requirements.push(e.attributes||'Condiciones de la receta propia.');}
  else if(kind==='healing'){materials=25;days=1;rule='SRD · poción de curación';requirements.push('Competencia con los útiles de herborista.');}
  else if(kind==='scroll'){
   const level=options.scrollLevel??e.scrollLevel;if(!Number.isInteger(level)||level<0||level>9)return{error:'Elegí el nivel del conjuro del pergamino.'};
   materials=SCROLL_COST[level];days=SCROLL_DAYS[level];rule='SRD · pergamino de conjuro';requirements.push('Conocimiento arcano O suministros de calígrafo; conjuro preparado cada día; componentes materiales del conjuro.');
  }else if(kind==='magic'){
   const r=RARITIES.indexOf(e.rarity);if(r<0)return{error:'Rareza sin receta oficial calculable. El DM puede definir una receta propia.'};
   materials=MAGIC_COST[r]*(e.consumable?.5:1);days=MAGIC_DAYS[r]*(e.consumable?.5:1);rule='SRD · fabricación mágica por rareza';requirements.push('Conocimiento arcano, competencia con la herramienta y conjuros preparados cada día si el objeto permite lanzarlos.');

  }else if(kind==='common'){
   if(e.magic)return{error:'Un objeto mágico requiere su regla de fabricación mágica.'};
   if(e.price==null)return{error:'Precio de referencia pendiente. Definí el valor o una receta propia.'};
   materials=Math.floor(cp(e.price)/2)/100;days=Math.max(1,Math.ceil(e.price/(m?.forge&&['Armas','Armaduras'].includes(e.category)?20:10)));rule=m?.forge&&['Armas','Armaduras'].includes(e.category)?'Yunque Certero · precio ÷ 20, redondeo a día en esta prueba':'SRD · fabricación no mágica';requirements.push('Competencia con la herramienta; materias primas disponibles.');
  }else return{error:'Sin receta asignada. Podés crear una variante con fabricación común, mágica o propia.'};
  if(kind==='magic'||kind==='manual'&&e.magic){if(e.needsBase){const base=options.base;if(!base||!options.baseOwned&&base.price==null)return{error:'Elegí el objeto base para completar su costo.'};if(!options.baseOwned){if(options.makeBase){baseCost=Math.floor(cp(base.price)/2)/100;baseDays=Math.max(1,Math.ceil(base.price/(m?.forge&&['Armas','Armaduras'].includes(base.category)?20:10)));}else baseCost=base.price;}}}
  const extras=options.extras||0;if(!Number.isFinite(extras)||extras<0)return{error:'Costo adicional inválido.'};
  const purchase=e.price==null?(kind==='magic'?magicValue(e.rarity,e.consumable,e.needsBase?options.base?.price??null:0):null):e.price;
  return{materials:Math.round(materials*qty*100)/100,baseCost:Math.round(baseCost*qty*100)/100,extras:Math.round(extras*qty*100)/100,total:Math.round((materials+baseCost+extras)*qty*100)/100,days:(days+baseDays)*qty,rule,tool,requirements,purchase:purchase==null?null:Math.round(purchase*qty*100)/100};
 }
 function equipmentTable(data,random=Math.random){const take=(a,n)=>{const pool=[...a],result=[];while(result.length<n&&pool.length){const i=Math.floor(random()*pool.length);result.push(pool.splice(i,1)[0]);}return result;};return[...structuredClone(data.equipment),...take(data.armament,9),...take(data.tools,9)].map((e,i)=>({...e,start:i+1,end:i+1}));}
 function validateEntry(e,campaigns=null){
  const str=(v,max)=>typeof v==='string'&&v.length<=max,number=(v,min,max)=>typeof v==='number'&&Number.isFinite(v)&&v>=min&&v<=max;
  if(!e||!str(e.id,200)||!e.id.startsWith('custom:')||!str(e.name,180)||!e.name.trim()||!Object.hasOwn(TYPES,e.type)||!str(e.description,30000)||!str(e.attributes,5000)||!str(e.category,100)||!Array.isArray(e.scope)||!e.scope.every(c=>str(c,150)&&(!campaigns||campaigns.has(c)))||(e.price!==null&&!number(e.price,0,1e9))||typeof e.magic!=='boolean'||typeof e.loot!=='boolean'||!['none','common','manual','magic','healing','scroll'].includes(e.craftMode)||!str(e.tool,100)||!str(e.origin,500)||!str(e.status,150)||!str(e.parent||'',200))throw Error('Ficha homebrew inválida.');
  if(e.days!=null&&!number(e.days,.01,100000)||e.materials!=null&&!number(e.materials,0,1e9))throw Error('Receta propia inválida.');
  if(e.componentsNote!=null&&!str(e.componentsNote,5000)||e.bonusEffect!=null&&!str(e.bonusEffect,1000)||e.enhancementBonus!=null&&(!Number.isInteger(e.enhancementBonus)||e.enhancementBonus<0||e.enhancementBonus>5))throw Error('Componentes o bonificación inválidos.');
  if(e.magicSpell!=null){const a=e.magicSpell,allowed=['id','name','level','activation','usage','uses','recovery','notes'];if(typeof a!=='object'||Array.isArray(a)||Object.keys(a).some(k=>!allowed.includes(k))||!str(a.id,200)||!str(a.name,180)||!a.name.trim()||!Number.isInteger(a.level)||a.level<0||a.level>9||!str(a.activation,1000)||!['atwill','daily','charges','consumed'].includes(a.usage)||!Number.isInteger(a.uses)||a.uses<1||a.uses>1000||!str(a.recovery,1000)||!str(a.notes,5000))throw Error('Conjuro imbuido inválido.');}
  if(e.magicEffect!=null&&!str(e.magicEffect,5000))throw Error('Propiedad mágica inválida.');
  if(e.rarity!=null&&!['Mundano',...RARITIES,'Artefacto','Por revisar'].includes(e.rarity))throw Error('Rareza inválida.');
  if(e.replacement!=null&&typeof e.replacement!=='boolean')throw Error('Modificación inválida.');
  if(e.spell!=null){if(typeof e.spell!=='object'||Array.isArray(e.spell))throw Error('Conjuro inválido.');for(const [k,v]of Object.entries(e.spell))if(!['level','school','casting','range','components','duration'].includes(k)||!str(v,1000))throw Error('Campo de conjuro inválido.');}
  if(e.metadata!=null){if(typeof e.metadata!=='object'||Array.isArray(e.metadata)||!['author','version','license','source'].every(k=>e.metadata[k]===undefined||str(e.metadata[k],1000)))throw Error('Procedencia inválida.');}
  return e;
 }
 function validate(input){
  if(!input||![1,2].includes(input.version))throw Error('Versión de respaldo no compatible.');
  const d=ensureCurrencies(input.version===1?migrate(input):structuredClone(input));
  const check=(ok,message)=>{if(!ok)throw Error(message);},str=(v,max=30000)=>typeof v==='string'&&v.length<=max,num=(v,min,max)=>Number.isFinite(v)&&typeof v==='number'&&v>=min&&v<=max;
  let nodes=0;function safe(v,depth=0){if(++nodes>300000||depth>16)throw Error('Respaldo demasiado complejo.');if(typeof v==='string'&&v.length>100000)throw Error('Texto demasiado largo.');if(typeof v==='number'&&!Number.isFinite(v))throw Error('Número inválido.');if(v&&typeof v==='object')for(const [k,x]of Object.entries(v)){if(['__proto__','constructor','prototype'].includes(k))throw Error('Clave no admitida.');safe(x,depth+1);}}safe(d);
  check(Array.isArray(d.campaigns)&&d.campaigns.length>0&&d.campaigns.length<=100,'Contextos inválidos.');const campaigns=new Set();for(const c of d.campaigns){check(str(c.id,150)&&c.id&&!c.id.includes('|')&&!campaigns.has(c.id)&&str(c.name,180)&&c.name.trim()&&str(c.description),'Contexto inválido.');campaigns.add(c.id);}check(campaigns.has(d.campaign),'Contexto activo inexistente.');
  check(d.currencies&&typeof d.currencies==='object'&&!Array.isArray(d.currencies),'Configuración de monedas inválida.');for(const [context,c]of Object.entries(d.currencies)){check(campaigns.has(context)&&c&&typeof c.platinum==='boolean'&&typeof c.electrum==='boolean'&&Array.isArray(c.custom)&&c.custom.length<=30,'Monedas de contexto inválidas.');const keys=new Set(COINS.map(c=>c[0])),names=new Set(COINS.map(c=>norm(c[1])));for(const unit of c.custom){check(unit&&str(unit.key,100)&&/^[a-z0-9-]+$/i.test(unit.key)&&!keys.has(unit.key)&&!['constructor','prototype','__proto__'].includes(unit.key)&&str(unit.name,80)&&unit.name.trim()&&!names.has(norm(unit.name))&&Number.isSafeInteger(unit.value)&&num(unit.value,1,1e9)&&typeof unit.enabled==='boolean','Moneda propia inválida.');keys.add(unit.key);names.add(norm(unit.name));}}
  check(Array.isArray(d.entries)&&d.entries.length<=10000,'Contenido propio inválido.');const ids=new Set();for(const e of d.entries){validateEntry(e,campaigns);check(!ids.has(e.id),'ID de contenido duplicado.');ids.add(e.id);}
  check(Array.isArray(d.merchants)&&d.merchants.length>0&&d.merchants.length<=500,'Comerciantes inválidos.');const merchants=new Set();for(const m of d.merchants){check(str(m.id,150)&&m.id&&!m.id.includes('|')&&!merchants.has(m.id)&&str(m.name,180)&&m.name.trim()&&Array.isArray(m.scope)&&m.scope.every(c=>campaigns.has(c))&&Array.isArray(m.categories)&&m.categories.every(c=>str(c,100))&&Array.isArray(m.tools)&&m.tools.every(t=>str(t,100))&&str(m.note,5000)&&typeof m.forge==='boolean','Comerciante inválido.');merchants.add(m.id);}
  check(d.shops&&typeof d.shops==='object'&&!Array.isArray(d.shops),'Mercados inválidos.');for(const [key,s]of Object.entries(d.shops)){const [c,m]=key.split('|');check(campaigns.has(c)&&merchants.has(m)&&['manual','random'].includes(s.mode)&&Number.isInteger(s.floor)&&num(s.floor,0,100)&&num(s.discount,0,100)&&s.stock&&typeof s.stock==='object'&&!Array.isArray(s.stock)&&Object.values(s.stock).every(n=>Number.isInteger(n)&&num(n,0,10000))&&Array.isArray(s.cart)&&s.cart.length<=10000&&s.cart.every(l=>str(l.id,200)&&Number.isInteger(l.qty)&&num(l.qty,1,10000)),'Compra o stock inválidos.');if(s.payment)currencyValue(s.payment,currencyList(d,c,true));}
  check(Array.isArray(d.loot)&&d.loot.length<=10000,'Historial inválido.');const historyIds=new Set();for(const l of d.loot){check(str(l.id,150)&&!historyIds.has(l.id)&&campaigns.has(l.campaign)&&str(l.date,100)&&Number.isFinite(Date.parse(l.date))&&Array.isArray(l.items)&&l.items.length<=100&&l.items.every(e=>str(e.id,200)&&str(e.name,180)&&str(e.description,60000)&&str(e.origin,500)&&(e.price===null||num(e.price,0,1e9))),'Resultado inválido.');historyIds.add(l.id);if(l.coins){check(Number.isSafeInteger(coinValue(l.coins)),'Monedas inválidas.');check(Array.isArray(l.valuables)&&l.valuables.every(v=>str(v.name,180)&&num(v.price,0,1e9)&&v.qty===1)&&num(l.budget,0,1e12),'Riqueza inválida.');check(coinValue(l.coins)+l.valuables.reduce((n,v)=>n+cp(v.price),0)===cp(l.budget),'El tesoro monetario no coincide con el presupuesto.');}}
  check(d.disabled&&typeof d.disabled==='object'&&!Array.isArray(d.disabled)&&Object.entries(d.disabled).every(([k,v])=>campaigns.has(k)&&Array.isArray(v)&&v.every(id=>str(id,200))),'Activación inválida.');
  const s=d.settings;check(s&&Number.isInteger(s.level)&&num(s.level,1,20)&&num(s.cr,0,30)&&['personal','hoard'].includes(s.kind)&&Number.isInteger(s.count)&&num(s.count,1,100)&&num(s.ratio,0,10)&&num(s.magicPct,0,100)&&Number.isInteger(s.maxMagic)&&num(s.maxMagic,0,20)&&Array.isArray(s.weights)&&s.weights.length===5&&s.weights.every(n=>num(n,0,1000))&&typeof s.autoWeights==='boolean'&&typeof s.artifacts==='boolean'&&num(s.artifactPct,0,100)&&str(s.title,160)&&['Cofre','Enemigo','Grupo','Otro'].includes(s.source)&&['Trivial','Fácil','Media','Difícil','Mortal'].includes(s.difficulty),'Parámetros de loot inválidos.');
  check(['verde','ambar','mono'].includes(d.theme)&&typeof d.electrum==='boolean','Preferencias inválidas.');check(d.dice&&['armamento','instrumentos','arcanos','reliquias','equipo','azar'].includes(d.dice.family)&&RKEYS.includes(d.dice.rarity),'Preferencias D100 inválidas.');
  if(d.equipmentTable)check(Array.isArray(d.equipmentTable)&&d.equipmentTable.length===100&&d.equipmentTable.every((r,i)=>r.start===i+1&&r.end===i+1&&str(r.name,200)),'Tabla de equipo inválida.');
  check(Array.isArray(d.hiddenLoot)&&d.hiddenLoot.every(id=>str(id,150)),'Vista de historial inválida.');return d;
 }
 function packageContent(entries){return{format:'botin-content',version:1,exported:new Date().toISOString(),entries:entries.map(e=>({...structuredClone(e),scope:[],metadata:e.metadata||{author:'',version:'1',license:'No declaradas',source:e.origin}}))};}
 function validatePackage(p){if(!p||p.format!=='botin-content'||p.version!==1||!Array.isArray(p.entries)||!p.entries.length||p.entries.length>10000)throw Error('Paquete de contenido inválido.');const ids=new Set();for(const e of p.entries){validateEntry(e);if(ids.has(e.id))throw Error('ID duplicado dentro del paquete.');ids.add(e.id);}return p;}
 function mergePackage(db,p,scope,policy='skip'){
  validatePackage(p);const next=structuredClone(db),remap=new Map(),added=[];let skipped=0;
  for(const e of p.entries){if(next.entries.some(x=>x.id===e.id)){if(policy==='skip'){skipped++;continue;}remap.set(e.id,'custom:'+uid());}else remap.set(e.id,e.id);}
  for(const e of p.entries){if(!remap.has(e.id))continue;const own={...structuredClone(e),id:remap.get(e.id),parent:remap.get(e.parent)||e.parent||'',scope:[...scope]};if(own.magicSpell&&remap.has(own.magicSpell.id))own.magicSpell.id=remap.get(own.magicSpell.id);next.entries.push(own);added.push(own.id);}
  // El contenido importado queda disponible para leer; su aplicación es explícita en cada contexto.
  for(const c of next.campaigns)next.disabled[c.id]=[...new Set([...(next.disabled[c.id]||[]),...added])];
  validate(next);return{db:next,added:added.length,skipped,remap:Object.fromEntries(remap)};
 }
 const api={norm,uid,TYPES,RARITIES,RKEYS,WEIGHTS,COINS,BASE_COINS,defaultCurrency,ensureCurrencies,currencyList,currencyValue,changeIn,currencyText,currencyPayment,displayMoney,tier,cp,money,visible,initial,migrate,effective,breakdown,coinText,coinValue,payment,total,sample,roll,stock,wealth,treasureBudget,rarity,referenceGroup,uniqueAttributes,randomDraft,DESIGN_LIMITS,spellPropertyText,magicGuidance,entryText,snapshot,generate,magicValue,bonusProfile,craft,equipmentTable,settings,validate,validateEntry,packageContent,validatePackage,mergePackage};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.BotinCore=api;
})(typeof window==='undefined'?globalThis:window);
