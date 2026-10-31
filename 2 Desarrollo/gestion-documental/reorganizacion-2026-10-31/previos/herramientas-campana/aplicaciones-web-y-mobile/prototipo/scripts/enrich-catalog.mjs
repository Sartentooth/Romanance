import fs from 'node:fs';
import path from 'node:path';
import {firstEntry,layoutOCR} from './format-ocr.mjs';
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'').replace(/loun/g,'ioun');
export default function enrich(base,dest,root){
 const raw=JSON.parse(fs.readFileSync(path.join(dest,'dmg-source.json'),'utf8')).entries;
 const sourceNames=new Set(raw.map(e=>norm(e.name)));
 const layouts=new Map();
 const text=e=>{const layout=layoutOCR(firstEntry(e.description).text.split('\n').filter(line=>!sourceNames.has(norm(line))).join('\n').trim());if(layout.tables.length)layouts.set(layout.description,layout.tables);return layout.description;};
 const aliases={'pociondecuracion':'POCIONES DE CURACIÓN','piedradelabuenafortuna':'PIEDRA DE LA BUENA FORTUNA (PIEDRA DE LA SUERTE)','gorroderespirarbajoelagua':'GORRO DE RESPIRAR BAJO EL AGUA G','cuernodealarmasilenciosa':'CUERNO DE ALARMA SILENCIOSA V','malladefrit':'MALLA DE IFRIT','jabalinadelrelampago':'JABALINA DEL RELÁMPAGO F'};
 const english=fs.readFileSync(path.join(root,'data/archivos md/dnd-5e-srd-markdown-master/magic-items.md'),'utf8');
 const en=new Map([...english.matchAll(/^#### (.+)\r?\n([\s\S]*?)(?=^#### |^### |$(?![\s\S]))/gm)].map(m=>[m[1],m[2].replace(/<\/tr>/g,'\n').replace(/<\/t[dh]>/g,' · ').replace(/<[^>]+>/g,'').replace(/\*\*|__/g,'').trim()]));
 const fallbacks=[[/^Arma \+[123]$/,'Weapon, +1, +2, or +3'],[/^Armadura \+[123]$/,'Armor, +1, +2, or +3'],[/^Escudo \+[123]$/,'Shield, +1, +2, or +3'],[/^Munición \+[123]$/,'Ammunition, +1, +2, or +3'],[/^Cuerno del Valhalla/,'Horn of Valhalla'],[/^Piedra [lI]oun/,'Ioun Stone'],[/^Varita del mago de guerra/,'Wand of the War Mage, +1, +2, or +3'],[/^Escudo atrapaflechas$/,'Arrow-Catching Shield'],[/^Escudo animado$/,'Animated Shield'],[/^Aceite de afilado$/,'Oil of Sharpness'],[/^Aceite de etereidad$/,'Oil of Etherealness'],[/^Filo de la fortuna$/,'Luck Blade'],[/^Amuleto a prueba de detección y localización$/,'Amulet of Proof against Detection and Location'],[/^Incensario de controlar elementales de aire$/,'Censer of Controlling Air Elementals']];
 const category=s=>{const m=s.match(/^(?:_)?(Wondrous [Ii]tem|Objeto maravilloso|Armadura|Armor|Arma|Weapon|Ammunition|Anillo|Ring|Bastón|Staff|Pergamino|Scroll|Poción|Potion|Vara|Rod|Varita|Wand)\b/i);return m?({'wondrous item':'Objetos maravillosos','objeto maravilloso':'Objetos maravillosos',armadura:'Armaduras',armor:'Armaduras',arma:'Armas',weapon:'Armas',ammunition:'Armas',anillo:'Anillos',ring:'Anillos','bastón':'Bastones',staff:'Bastones',pergamino:'Pergaminos',scroll:'Pergaminos','poción':'Pociones',potion:'Pociones',vara:'Varas',rod:'Varas',varita:'Varitas',wand:'Varitas'})[m[1].toLowerCase()]:null;};
 const used=new Set();let dmg=0,srd=0;
 const checked={
  'Ojo de imitación':{page:298,description:'Objeto maravilloso, común\n\nEste ojo mágico sustituye a uno real que perdieras o te extirparan. Mientras esté incrustado en la cuenca ocular, puedes ver a través del orbe diminuto como si fuera un ojo normal. Puedes insertarlo o extraerlo como acción de magia y no se te puede quitar contra tu voluntad mientras estés con vida.'},
  'Instrumento de ilusiones':{page:285,description:'Objeto maravilloso, común\nMientras tocas este instrumento musical, puedes emplear una acción de magia para crear efectos ilusorios visuales e inofensivos en una emanación de 1,5 m que se origina en el instrumento. Si eres un bardo, el tamaño de la emanación aumenta a 4,5 m. Algunos ejemplos de esas ilusiones son notas musicales luminosas, un bailarín espectral, mariposas y nieve que cae suavemente. Los efectos mágicos no tienen sustancia ni sonido y es obvio que son ilusorios. Al dejar de tocar, desaparecerán.'},
  'Útil bolsita de especias de Heward':{page:316,description:'Objeto maravilloso, común\nEsta bolsita parece vacía y tiene 10 cargas. Mientras la sostienes, puedes emplear una acción de magia para gastar 1 carga, nombrar cualquier condimento no mágico (como sal, pimienta, azafrán o cilantro) y sacar una pizca del mismo que basta para sazonar una sola comida. La bolsita recupera 1d6 + 4 cargas empleadas cada día, al amanecer.'}
 };
 for(const e of base.filter(e=>e.magic)){
  const key=norm(e.name.split('(')[0]),alias=aliases[key];
  let candidates=raw.filter(r=>alias?norm(r.name)===norm(alias):norm(r.name)===key||norm(r.name).endsWith(key));
  if(!candidates.length){const stripped=norm(e.name.replace(/\s*\+[123]$/,''));candidates=raw.filter(r=>norm(r.name)===stripped);}
  if(candidates.length===1){const r=candidates[0];used.add(r);e.itemGroup=r.itemGroup;e.description=text(r);e.origin='DMG 2024 ES · p. '+r.page;e.status='Texto OCR · pendiente de cotejo';dmg++;}
  else{const title=fallbacks.find(([pattern])=>pattern.test(e.name))?.[1];if(title&&en.has(title)){e.description=en.get(title);e.origin='SRD 5.2.1 EN · magic-items.md · '+title;e.status='Extracto EN · pendiente de cotejo ES';srd++;}}
  e.itemGroup=e.itemGroup||category(e.description)||(/^Malla |^Cuero tachonado |^Cota de/.test(e.name)?'Armaduras':/^(Filo de|Defensora|Matadragones|Matagigantes|Lengua de|Vengadora|Hoja lunar|Hierro de|Ladrona de|Laúd de)/.test(e.name)?'Armas':null);
  if(checked[e.name]){const r=checked[e.name];e.description=r.description;e.itemGroup='Objetos maravillosos';e.origin='DMG 2024 ES · p. '+r.page;e.status='Cotejado visualmente · '+(e.name==='Ojo de imitación'?'2026-10-18':'2026-10-17');}
 }
 const extraNames={'HACHA DE LOS SEÑORES ENANOS':'Hacha de los señores enanos','LIBRO DE LA OSCURIDAD VIL':'Libro de la Oscuridad Vil','LIBRO DE LAS OBRAS ELEVADAS':'Libro de las Obras Elevadas','NEGRARMA':'Negrarma','OLEAJE':'Oleaje','ORBE DE LOS DRAGONES':'Orbe de los dragones','ROTUNDO':'Rotundo','VARITA DE ORCUS':'Varita de Orcus'};
 for(const r of raw.filter(r=>extraNames[r.name])){used.add(r);const rarity=/artefacto/i.test(r.description.split('\n').slice(0,3).join(' '))?'Artefacto':'Legendario';base.push({id:'dmg:item:'+norm(r.name),name:extraNames[r.name],english:'',type:'item',category:'Objetos mágicos',itemGroup:r.itemGroup,magic:true,rarity,price:rarity==='Artefacto'||r.itemGroup==='Armas'?null:200000,description:text(r),attributes:'',scope:[],origin:'DMG 2024 ES · p. '+r.page,status:'Texto OCR · pendiente de cotejo',craftMode:'none',tool:'',loot:false,priceNote:rarity==='Artefacto'?'Valor incalculable.':'Objeto singular; fabricación a definir por el DM.'});}
 for(const e of base)if(layouts.has(e.description))e.descriptionTables=layouts.get(e.description);
 // Tabla cotejada visualmente en DMG ES p. 249 (2026-10-18). El resto de la
 // descripción conserva su estado OCR; el cotejo de una tabla no valida la ficha.
 const power=base.find(e=>e.name==='Bastón de poder');
 if(power?.descriptionTables?.length===1){
  const t=power.descriptionTables[0],values=[['Bola de fuego (versión de nivel 5)',5],['Cono de frío',5],['Globo de invulnerabilidad',6],['Inmovilizar monstruo',5],['Levitar',2],['Muro de fuerza',5],['Proyectil mágico',1],['Rayo debilitador',1],['Relámpago (versión de nivel 5)',5]];
  const plain='Conjuro Coste en cargas\n'+values.map(([name,n])=>name+' '+n).join('\n');
  power.description=power.description.slice(0,t.start)+plain+power.description.slice(t.end);
  power.descriptionTables=[{...t,plain,end:t.start+plain.length,caption:'Conjuros · tabla cotejada · DMG p. 249',rows:[t.rows[0],...values.map(([name,n])=>[{text:name},{text:String(n)}])]}];
 }
 const unresolved=base.filter(e=>e.magic&&e.status==='Solo referencia · ficha pendiente').map(e=>({id:e.id,name:e.name,reference:e.reference}));
 fs.writeFileSync(path.join(dest,'catalog-coverage.json'),JSON.stringify({entries:base.length,spells:base.filter(e=>e.type==='spell').length,monsters:base.filter(e=>e.type==='monster').length,dmgTexts:dmg,srdFallbacks:srd,unresolved,unusedSourceHeadings:raw.filter(r=>!used.has(r)).map(r=>r.name),review:'Extracciones pendientes de cotejo visual salvo indicación individual; no se marcan como verificadas.'},null,2));
 console.log(JSON.stringify({dmgTexts:dmg,srdFallbacks:srd,pending:unresolved.length}));
}
