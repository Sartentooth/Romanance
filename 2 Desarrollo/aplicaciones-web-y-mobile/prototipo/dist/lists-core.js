(function(root){'use strict';
 const C=root.BotinCore;
 const groups=['Armas','Armaduras','Anillos','Bastones','Objetos maravillosos','Pergaminos','Pociones','Varas','Varitas','Equipo','Herramientas','Monturas','Vehículos','Equipo de montura'];
 const listId=g=>'group:'+g;
 function definitions(data){return[
  {id:'spells',name:'Conjuros',section:'Biblioteca'},
  {id:'magic',name:'Objetos mágicos',section:'Objetos y equipo'},
  {id:'artifacts',name:'Artefactos',section:'Objetos y equipo'},
  ...groups.map(g=>({id:listId(g),name:g,section:'Objetos y equipo'})),
  {id:'services',name:'Servicios',section:'Biblioteca'},
  ...Object.entries(C.TYPES).filter(([t])=>!['item','service','spell'].includes(t)).map(([t,n])=>({id:'type:'+t,name:({rule:'Reglas',feat:'Dotes',background:'Trasfondos',species:'Especies / linajes',class:'Clases',subclass:'Subclases',monster:'Monstruos'})[t]||n,section:'Biblioteca'})),
  {id:'unclassified',name:'Por clasificar',section:'Revisión'},
  ...Object.keys(data?.tables||{}).map(key=>{const [family,rarity]=key.split('|');return{id:'table:'+key,name:({armamento:'Armamento',instrumentos:'Instrumentos',arcanos:'Arcanos',reliquias:'Reliquias'})[family]+' · '+C.RARITIES[C.RKEYS.indexOf(rarity)],section:'Tablas aleatorias · DMG'};})
 ];}
 function listEntries(entries,id,data){
  if(id==='spells')return entries.filter(e=>e.type==='spell');
  if(id==='magic')return entries.filter(e=>e.type==='item'&&e.magic);
  if(id==='artifacts')return entries.filter(e=>e.type==='item'&&e.rarity==='Artefacto');
  if(id==='services')return entries.filter(e=>e.type==='service');
  if(id.startsWith('type:'))return entries.filter(e=>e.type===id.slice(5));
  if(id.startsWith('group:'))return entries.filter(e=>e.type==='item'&&C.referenceGroup(e)===id.slice(6));
  if(id==='unclassified')return entries.filter(e=>e.type==='item'&&!groups.includes(C.referenceGroup(e)));
  if(id.startsWith('table:')){const ids=new Set((data?.tables?.[id.slice(6)]||[]).map(r=>r.itemId));return entries.filter(e=>ids.has(e.id));}
  return [];
 }
 function validateList(list,contexts){if(!list||typeof list.id!=='string'||!/^list:[a-z0-9-]+$/i.test(list.id)||list.id.length>200||typeof list.name!=='string'||!list.name.trim()||list.name.length>180||!Array.isArray(list.scope)||list.scope.some(c=>typeof c!=='string'||c.length>150||contexts&&!contexts.has(c))||!Array.isArray(list.entryIds)||list.entryIds.length>10000||new Set(list.entryIds).size!==list.entryIds.length||list.entryIds.some(id=>typeof id!=='string'||!id||id.length>200))throw Error('Lista propia inválida.');return list;}
 function updateList(list,selected,remove=false){const ids=new Set(list.entryIds);for(const id of selected)remove?ids.delete(id):ids.add(id);return {...structuredClone(list),entryIds:[...ids]};}
 function ensure(d){if(d.customLists===undefined)d.customLists=[];return d;}
 const originalInitial=C.initial,originalMigrate=C.migrate,originalValidate=C.validate;
 C.initial=()=>ensure(originalInitial());C.migrate=d=>ensure(originalMigrate(d));
 C.validate=input=>{const d=ensure(originalValidate(input));if(!Array.isArray(d.customLists)||d.customLists.length>500)throw Error('Listas propias inválidas.');const ids=new Set(),contexts=new Set(d.campaigns.map(c=>c.id));for(const list of d.customLists){validateList(list,contexts);if(ids.has(list.id))throw Error('ID de lista duplicado.');ids.add(list.id);}return d;};
 function packageList(list,entries){validateList(list);const own=new Map(entries.filter(e=>e.id.startsWith('custom:')).map(e=>[e.id,e])),included=new Set();function include(id){if(included.has(id)||!own.has(id))return;included.add(id);const e=own.get(id);if(e.parent)include(e.parent);if(e.magicSpell)include(e.magicSpell.id);}list.entryIds.forEach(include);return{format:'botin-list',version:1,exported:new Date().toISOString(),list:{...structuredClone(list),scope:[]},entries:C.packageContent([...included].map(id=>own.get(id))).entries};}
 function validateListPackage(p){if(!p||p.format!=='botin-list'||p.version!==1||!Array.isArray(p.entries)||p.entries.length>10000)throw Error('Paquete de lista inválido.');validateList(p.list);if(p.entries.length)C.validatePackage({format:'botin-content',version:1,entries:p.entries});return p;}
 function mergeListPackage(db,p,scope,policy='skip'){validateListPackage(p);let result={db:structuredClone(db),added:0,skipped:0,remap:{}};if(p.entries.length)result=C.mergePackage(db,{format:'botin-content',version:1,entries:p.entries},scope,policy);const list={...structuredClone(p.list),id:'list:'+C.uid(),scope:[...scope],entryIds:p.list.entryIds.map(id=>result.remap?.[id]||id)};result.db.customLists.push(list);result.db=C.validate(result.db);return{...result,list};}
 Object.assign(C,{listDefinitions:definitions,listEntries,validateList,updateList,packageList,validateListPackage,mergeListPackage});
})(typeof window==='undefined'?globalThis:window);
