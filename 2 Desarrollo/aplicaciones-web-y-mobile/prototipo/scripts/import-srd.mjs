import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../..');
const source=path.join(root,'2 Desarrollo/referencias-reglamentarias/srd-5.2.1-markdown');
const clean=s=>s.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const plainText=s=>s.replace(/<\/tr>/g,'\n').replace(/<\/t[dh]>/g,' · ').replace(/<[^>]+>/g,'').replace(/\*\*|__/g,'').trim();
// Conservar celdas y posiciones además del texto plano para TXT, búsqueda y edición.
// La vista reconstruye las tablas con valores escapados; nunca inserta HTML fuente.
const sourceTables=new Map();
const text=s=>{
 const plain=plainText(s),tables=[];let cursor=0;
 for(const match of s.matchAll(/<table\b[^>]*>[\s\S]*?<\/table>/g)){
  const value=plainText(match[0]),start=plain.indexOf(value,cursor);
  if(start<0)throw Error('No se pudo localizar una tabla del SRD en su texto plano.');
  const rows=[...match[0].matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/g)].map(row=>[...row[1].matchAll(/<(td|th)\b([^>]*)>([\s\S]*?)<\/\1>/g)].map(cell=>({text:clean(plainText(cell[3])).replace(/&minus;/g,'−'),header:cell[1]==='th',colspan:Number(cell[2].match(/colspan=["']?(\d+)/i)?.[1]||1),rowspan:Number(cell[2].match(/rowspan=["']?(\d+)/i)?.[1]||1)}))).filter(row=>row.length);
  tables.push({start,end:start+value.length,plain:value,rows});cursor=start+value.length;
 }
 if(tables.length)sourceTables.set(plain,tables);
 return plain;
};
const equipment=fs.readFileSync(path.join(source,'equipment.md'),'utf8');
const names={'Dagger':'Daga','Longsword':'Espada larga','Shortsword':'Espada corta','Greatsword':'Espadón','Battleaxe':'Hacha de batalla','Handaxe':'Hacha de mano','Light Hammer':'Martillo ligero','Warhammer':'Martillo de guerra','Shortbow':'Arco corto','Longbow':'Arco largo','Light Crossbow':'Ballesta ligera','Heavy Crossbow':'Ballesta pesada','Shield':'Escudo','Plate Armor':'Armadura de placas','Plate':'Armadura de placas','Leather Armor':'Armadura de cuero','Leather':'Armadura de cuero','Chain Mail':'Cota de malla','Rope':'Cuerda','Backpack':'Mochila','Rations':'Raciones','Torch':'Antorcha','Tinderbox':'Yesquero','Tent':'Tienda','Potion of Healing':'Poción de curación','Healing Word':'Palabra de curación','Cure Wounds':'Curar heridas','Fireball':'Bola de fuego','Magic Missile':'Proyectil mágico','Shield [Spell]':'Escudo','Alarm':'Alarma','Guidance':'Guía','Light':'Luz','Mage Hand':'Mano de mago','Detect Magic':'Detectar magia','Identify':'Identificar','Advantage':'Ventaja','Disadvantage':'Desventaja','Concentration':'Concentración','Grappled':'Agarrado','Prone':'Derribado','Restrained':'Apresado','Incapacitated':'Incapacitado','Long Rest':'Descanso largo','Short Rest':'Descanso corto','Attack':'Atacar','Help':'Ayudar','Dodge':'Esquivar'};
const sections=[...equipment.matchAll(/^## (Weapons|Armor|Tools|Adventuring Gear|Mounts and Vehicles)\s*\r?\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)];
const records=[];const seen=new Set();
const toolsSection=equipment.match(/^## Tools\s*\r?\n([\s\S]*?)(?=^## )/m)?.[1]||'';
for(const match of toolsSection.matchAll(/^\*\*([^\n]+?) \((\d+) GP\)\*\*\r?\n([\s\S]*?)(?=^\*\*[^\n]+? \(\d+ GP\)\*\*|^#### |$(?![\s\S]))/gm)){
 const name=match[1];seen.add(name);records.push({id:'srd:item:'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),name:name==="Smith's Tools"?'Herramientas de herrero':name==='Herbalism Kit'?'Kit de herbolario':name,english:name,type:'item',category:'Herramientas',price:Number(match[2]),magic:false,rarity:'Mundano',description:text(match[3]),attributes:'',scope:[],origin:'SRD 5.2.1 · equipment.md',status:'Extracto EN · pendiente de cotejo ES',craftMode:'none',tool:'',loot:true});
}
for(const section of sections){
 const category={Weapons:'Armas',Armor:'Armaduras',Tools:'Herramientas','Adventuring Gear':'Equipo','Mounts and Vehicles':'Transporte'}[section[1]];
 for(const table of section[2].matchAll(/<table>[\s\S]*?<\/table>/g)){
  let headers=[];
  for(const row of table[0].matchAll(/<tr>([\s\S]*?)<\/tr>/g)){
   if(row[1].includes('<th>')){headers=[...row[1].matchAll(/<th>([\s\S]*?)<\/th>/g)].map(m=>clean(m[1]));continue;}
   const cells=[...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(m=>clean(m[1]));
   const money=cells.find(c=>/^\d[\d,]*(?:\.\d+)? (?:GP|SP|CP)$/.test(c));
   if(!money||cells.length<2||!cells[0]||seen.has(cells[0]))continue;
   seen.add(cells[0]);const [amount,unit]=money.split(' '),price=Number(amount.replaceAll(',',''))*({GP:1,SP:.1,CP:.01}[unit]);
   const name=cells[0];const detail=[...section[2].matchAll(/^#### (.+)\r?\n([\s\S]*?)(?=^#### |^### |$(?![\s\S]))/gm)].find(m=>m[1].startsWith(name+' (')||m[1]===name);
   records.push({id:'srd:item:'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),name:names[name]||name,english:name,type:'item',category,price,magic:name==='Potion of Healing',rarity:name==='Potion of Healing'?'Común':'Mundano',description:detail?text(detail[2]):cells.map((c,i)=>(headers[i]?headers[i]+': ':'')+c).join('\n'),attributes:cells.map((c,i)=>(headers[i]?headers[i]+': ':'')+c).join('\n'),scope:[],origin:'SRD 5.2.1 · equipment.md',status:'Extracto EN · pendiente de cotejo ES',craftMode:category==='Armas'||category==='Armaduras'?'common':name==='Potion of Healing'?'healing':'none',tool:category==='Armas'||category==='Armaduras'?'Herramientas de herrero':name==='Potion of Healing'?'Kit de herbolario':'',loot:true});
  }
 }
}
// Las propiedades y precios de transporte proceden de las mismas tablas del SRD.
const mountNames=new Set(['Camel','Elephant','Horse, Draft','Horse, Riding','Mastiff','Mule','Pony','Warhorse']);
const saddleNames=new Set(['Exotic','Military','Riding']);
for(const entry of records.filter(e=>e.category==='Transporte')){
 entry.loot=false;entry.craftMode='none';
 entry.itemGroup=mountNames.has(entry.english)?'Monturas':saddleNames.has(entry.english)||entry.english==='Feed per day'?'Equipo de montura':'Vehículos';
 if(saddleNames.has(entry.english)){entry.name='Saddle · '+entry.english;entry.description+='\n'+text(equipment.match(/^### Saddles\s*\r?\n([\s\S]*?)(?=^\*\*Mounts)/m)?.[1]||'');}
 if(entry.english==='Stabling per day'){entry.type='service';entry.category='Alojamiento';entry.unit='día';delete entry.itemGroup;}
}
for(const entry of records)if(entry.attributes===entry.description)entry.attributes='';
const spells=fs.readFileSync(path.join(source,'spells.md'),'utf8');
const spellMatches=[...spells.matchAll(/^#### (.+)\r?\n([\s\S]*?)(?=^#### |$(?![\s\S]))/gm)].filter(m=>/^\s*_([^\n]*(?:Level [1-9]|Cantrip)[^\n]*)_/i.test(m[2]));
for(const [index,match] of spellMatches.entries()){
 const meta=match[2].match(/^\s*_([^\n]+)_/);if(!meta||!(/Level [1-9]|Cantrip/i.test(meta[1])))continue;
 const level=Number(meta[1].match(/Level (\d)/)?.[1]||0);
 const body=spells.slice(match.index+match[0].indexOf(match[2]),spellMatches[index+1]?.index||spells.length);
 records.push({id:'srd:spell:'+match[1].toLowerCase().replace(/[^a-z0-9]+/g,'-'),name:names[match[1]+' [Spell]']||names[match[1]]||match[1],english:match[1],type:'spell',category:level?'Nivel '+level:'Truco',level,description:text(body),attributes:meta[1],scope:[],origin:'SRD 5.2.1 · spells.md',status:'Extracto EN · pendiente de cotejo ES',price:null,loot:false});
}
const glossary=fs.readFileSync(path.join(source,'rules-glossary.md'),'utf8');
for(const match of glossary.matchAll(/^#### (.+)\r?\n([\s\S]*?)(?=^#### |$(?![\s\S]))/gm)){
 const name=match[1].replace(/ \[.+\]$/,'');if(['Glossary Conventions','Rules Definitions'].includes(name))continue;
 records.push({id:'srd:rule:'+match[1].toLowerCase().replace(/[^a-z0-9]+/g,'-'),name:names[name]||name,english:match[1],type:'rule',category:'Reglas',description:text(match[2]),attributes:'',scope:[],origin:'SRD 5.2.1 · rules-glossary.md',status:'Extracto EN · pendiente de cotejo ES',price:null,loot:false});
}
const metal=new Set(['Dagger','Longsword','Shortsword','Greatsword','Battleaxe','Handaxe','Light Hammer','Warhammer','Mace','Maul','Morningstar','Rapier','Scimitar','Sickle','Flail','Chain Mail','Chain Shirt','Scale Mail','Splint Armor','Splint','Plate Armor','Plate','Half Plate Armor','Half Plate','Ring Mail','Breastplate']);
for(const [file,heading]of [['monsters-A-Z.md',3],['animals.md',2]]){
 const content=fs.readFileSync(path.join(source,file),'utf8'),marks='#'.repeat(heading);
 const pattern=new RegExp('^'+marks+' (.+)\\r?\\n([\\s\\S]*?)(?=^#{2,'+heading+'} |$(?![\\s\\S]))','gm');
 let count=0;
 for(const m of content.matchAll(pattern)){
  const cr=m[2].match(/\*\*CR\*\*\s+(\d+(?:\/\d+)?)\s*\((?:XP\s+)?([\d,]+)(?:\s+XP)?(?:,?\s+or\s+([\d,]+)\s+in lair)?/);
  if(!cr)continue;
  const metadata=m[2].match(/^\s*_([^\n]+)_/m)?.[1]||'',creatureType=(metadata.match(/\b(Aberration|Beast|Celestial|Construct|Dragon|Elemental|Fey|Fiend|Giant|Humanoid|Monstrosity|Ooze|Plant|Undead)s?\b/i)?.[1]||metadata.match(/\bMonstrosities\b/i)?.[0]?.replace(/Monstrosities/i,'Monstrosity')||'').trim();
  const stat=field=>m[2].match(new RegExp('\\*\\*'+field+'\\*\\*\\s+([^\\n<]+)'))?.[1].trim()||'';
  records.push({id:'srd:monster:'+m[1].toLowerCase().replace(/[^a-z0-9]+/g,'-'),name:m[1],english:m[1],type:'monster',category:file==='animals.md'?'Animales':creatureType||'Monstruos',description:text(m[2]),attributes:'',scope:[],origin:'SRD 5.2.1 · '+file,status:'Extracto EN · pendiente de cotejo ES',price:null,magic:false,loot:false,craftMode:'none',tool:'',rarity:'Mundano',monster:{cr:cr[1],xp:Number(cr[2].replaceAll(',','')),lairXp:cr[3]?Number(cr[3].replaceAll(',','')):null,creatureType,ac:stat('AC').split(' **Initiative**')[0],hp:stat('HP'),speed:stat('Speed')}});count++;
 }
 const expected=[...content.matchAll(/\*\*CR\*\*/g)].length;
 if(count!==expected)throw Error('Bloques de monstruo omitidos en '+file+': '+count+'/'+expected);
}
const addReference=(name,type,body,file,category)=>records.push({id:'srd:'+type+':'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-'),name,english:name,type,category,description:text(body),attributes:'',scope:[],origin:'SRD 5.2.1 · '+file,status:'Extracto EN · pendiente de cotejo ES',price:null,magic:false,loot:false,craftMode:'none',tool:'',rarity:'Mundano'});
const feats=fs.readFileSync(path.join(source,'feats.md'),'utf8');
for(const m of feats.matchAll(/^#### (.+)\r?\n([\s\S]*?)(?=^#### |^### |$(?![\s\S]))/gm))addReference(m[1],'feat',m[2],'feats.md','Dotes');
const origins=fs.readFileSync(path.join(source,'character-origins.md'),'utf8');
for(const [section,type,category] of [['Background Descriptions','background','Trasfondos'],['Species Descriptions','species','Especies / linajes']]){
 const body=origins.slice(origins.indexOf('### '+section)).split(/^## /m)[0];
 for(const m of body.matchAll(/^#### (.+)\r?\n([\s\S]*?)(?=^#### |$(?![\s\S]))/gm))addReference(m[1],type,m[2],'character-origins.md',category);
}
const classes=fs.readFileSync(path.join(source,'classes.md'),'utf8');
for(const m of classes.matchAll(/^## (.+)\r?\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)){
 const split=m[2].search(/^### .+ Subclass: /m),body=split<0?m[2]:m[2].slice(0,split);
 addReference(m[1],'class',body,'classes.md','Clases');
 if(split>=0){const sub=m[2].slice(split).match(/^### (.+) Subclass: (.+)\r?\n([\s\S]*)/);if(sub)addReference(sub[2],'subclass',sub[3],'classes.md',sub[1]);}
}
for(const entry of records.filter(r=>r.type==='item'&&r.craftMode==='common'))entry.tool=metal.has(entry.english)?'Herramientas de herrero':'';
for(const entry of records.filter(r=>r.type==='item'&&r.english.startsWith('Spell Scroll'))){entry.magic=true;entry.rarity='Común';}
for(const entry of records){const tables=sourceTables.get(entry.description);if(tables)entry.descriptionTables=tables;}
fs.mkdirSync(path.join(root,'2 Desarrollo/aplicaciones-web-y-mobile/prototipo/dist'),{recursive:true});
fs.writeFileSync(path.join(root,'2 Desarrollo/aplicaciones-web-y-mobile/prototipo/dist/srd-data.js'),'/* Extractos de fuentes locales SRD 5.2.1; ver créditos. No contiene textos del DMG. */\nwindow.SRD_DATA='+JSON.stringify(records)+';\n');
console.log(JSON.stringify({items:records.filter(r=>r.type==='item').length,spells:records.filter(r=>r.type==='spell').length,rules:records.filter(r=>r.type==='rule').length}));
