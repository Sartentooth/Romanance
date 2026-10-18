import './import-srd.mjs';
import './import-encounter-rules.mjs';
import enrich from './enrich-catalog.mjs';
import {versionAssets} from './asset-versions.mjs';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const area=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
const dest=path.join(area,'prototipo/dist');
const baseFile=fs.readFileSync(path.join(dest,'srd-data.js'),'utf8');
const base=JSON.parse(baseFile.slice(baseFile.indexOf('window.SRD_DATA=')+16).trim().replace(/;$/,''));
const legacy=fs.readFileSync(path.join(area,'fuentes/loot-generator.html'),'utf8');
const data=JSON.parse(legacy.match(/^const D100_DATA=(.*);$/m)[1]);
const norm=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
// La extracción antigua concatenó algunas fichas contiguas. Conservar solo
// la primera cuando aparece otro encabezado seguido de su categoría.
const sheetText=sheet=>sheet.desc.split(/\n[^\n]+\n(?=(?:Objeto maravilloso|Poción|Anillo|Arma|Armadura|Bastón|Pergamino|Vara|Varita)[ ,(])/)[0].split(/\n{2,}/).map(block=>block.replace(/\n/g,' ')).join('\n\n');
const rarities={comun:'Común',poco_comun:'Infrecuente',raro:'Raro',muy_raro:'Muy raro',legendario:'Legendario'};
const tables={};const prices={'Común':100,'Infrecuente':400,'Raro':4000,'Muy raro':40000,'Legendario':200000};
for(const [key,rows]of Object.entries(data.tables)){
 const rarity=rarities[key.split('|')[1]];
 tables[key]=rows.map(row=>{
  let item=base.find(e=>e.type==='item'&&norm(e.name)===norm(row.name)&&e.rarity===rarity);
  if(!item){
   const sheet=Object.values(data.srd).find(e=>norm(e.name)===norm(row.name));
   const slug=norm(row.name).replace(/[^a-z0-9]+/g,'-');
   item={id:'dmg:item:'+slug+':'+key.split('|')[1],name:row.name,english:'',type:'item',category:'Objetos mágicos',price:null,magic:true,rarity,description:sheet?sheetText(sheet):'Ficha descriptiva pendiente de incorporar y cotejar. Referencia: DMG 2024, p. '+row.page+'.',attributes:'',scope:[],origin:sheet?'SRD 5.2.1 ES · p. '+sheet.page:'DMG 2024 · p. '+row.page,status:sheet?'Extracción heredada · pendiente de cotejo':'Solo referencia · ficha pendiente',craftMode:'magic',tool:'',loot:true,reference:'DMG 2024 · tabla '+key+' · p. '+row.page};
   // El precio de una variante que incorpora arma/armadura requiere elegir la base.
   const incorporates=/^(Arma|Armadura|Munición|Escudo)\b/i.test(row.name);
   item.needsBase=incorporates;
   item.consumable=/^(Poción|Aceite|Pergamino|Munición)\b/i.test(row.name);
   item.price=incorporates||/^Pergamino/i.test(row.name)?null:prices[rarity]*(item.consumable?.5:1);
   item.priceNote='Valor por rareza SRD/DMG; pendiente base o nivel para armas, armaduras y pergaminos.';
   if(/^Pergamino/i.test(row.name)){item.craftMode='scroll';item.scrollLevel=null;}
   base.push(item);
  }
  return {...row,itemId:item.id};
 });
}
for(const e of base){if(e.english==='Potion of Healing'){e.parent='';e.consumable=true;e.craftMode='healing';}}
const service=(slug,name,category,price,unit,description='',origin='SRD 5.2.1 ES · p. 110')=>({id:'srd:service:'+slug,name,type:'service',category,price,unit,description:description||`${name}. Tarifa por ${unit}.`,attributes:'',scope:[],origin,status:price===null?'Precio pendiente de cotejo':'Referencia SRD',loot:false,magic:false,rarity:'Mundano',craftMode:'none',tool:''});
base.push(service('ale','Cerveza · jarra','Bebidas',.04,'jarra'),service('bread','Pan · hogaza','Comida',.02,'hogaza'),service('cheese','Queso · cuña','Comida',.1,'cuña'),service('wine','Vino común · botella','Bebidas',.2,'botella'),service('wine-fine','Vino de calidad · botella','Bebidas',10,'botella'));
for(const [slug,label,price]of [['squalid','miserable',.01],['poor','pobre',.02],['modest','modesta',.1],['comfortable','copiosa',.2],['wealthy','lujosa',null],['aristocratic','aristocrática',.6]])base.push(service('meal-'+slug,'Comida '+label,'Comida',price,'comida',slug==='wealthy'?'Pendiente: el PDF español y el Markdown inglés difieren en esta tarifa. El DM puede definir su precio.':''));
for(const [slug,label,price]of [['squalid','miserable',.07],['poor','pobre',.1],['modest','modesta',.5],['comfortable','cómoda',.8],['wealthy','lujosa',2],['aristocratic','aristocrática',4]])base.push(service('inn-'+slug,'Posada · estancia '+label,'Alojamiento',price,'día'));
base.push(service('skilled','Asalariado cualificado','Contratación',2,'día','Remuneración mínima de referencia. El DM determina el servicio y su disponibilidad.','SRD 5.2.1 ES · p. 111'),service('untrained','Asalariado no cualificado','Contratación',.2,'día','','SRD 5.2.1 ES · p. 111'),service('messenger','Mensajero','Transporte',null,'km','Referencia SRD: 1 o 2 PC por kilómetro. Elegir tarifa mediante una variante propia.','SRD 5.2.1 ES · p. 111'),service('rent','Alquiler personalizado','Alquileres',null,'día','Definí qué se alquila, su tarifa y unidad. No existe un precio universal precargado.','Plantilla · precio a definir por el DM'));
for(const [level,price]of [[0,30],[1,50],[2,200],[3,300],[4,2000],[5,2000],[6,20000],[7,20000],[8,20000],[9,100000]])base.push(service('spell-'+level,'Lanzamiento · '+(level?'nivel '+level:'truco'),'Servicios mágicos',price,'lanzamiento','Sumar los componentes caros que requiera el conjuro. Disponibilidad a criterio del DM.','SRD 5.2.1 ES · p. 111'));
const rocio={id:'romanance:rocio',parent:'srd:item:potion-of-healing',replacement:true,name:'Rocío de Ethen',english:'',type:'item',category:'Equipo',price:null,priceNote:'Precio de venta por definir; 25 PO corresponde a fabricación, no venta.',magic:false,rarity:'Mundano',description:'Brebaje no mágico. +1d4 a una tirada de Medicina, Supervivencia o un conjuro de curación, a elección del jugador. Dura una hora o hasta usar el beneficio. Un solo uso; no restaura PG por sí mismo. No se acumulan bonificadores ni usos pendientes.',attributes:'Kit de Herbolario, competencia y conocimiento de la receta. 7 días y 25 PO de materias primas.',scope:['romanance'],origin:'Romanance · decisión del autor 2026-10-14',status:'Homebrew de campaña',craftMode:'manual',tool:'Kit de herbolario',days:7,materials:25,loot:true};
base.push(rocio);
enrich(base,dest,path.resolve(area,'../..'));
// Equipo de D100: 82 posiciones fijas + 18 selecciones persistentes, como en 1.2.
const equipment=data.equipment.map((r,i)=>({...r,start:i+1,end:i+1}));
fs.writeFileSync(path.join(dest,'catalog-data.js'),'/* Fuentes preservadas. Uso local; cotejo completo y paquete comercial pendientes. */\nwindow.CATALOG_DATA='+JSON.stringify(base)+';\nwindow.TABLE_DATA='+JSON.stringify({tables,equipment,armament:data.armament,tools:data.tools})+';\n');
console.log(JSON.stringify({entries:base.length,magicTables:Object.keys(tables).length,equipment:equipment.length}));

fs.writeFileSync(path.join(dest,'index.html'),versionAssets(fs.readFileSync(path.join(area,'prototipo/scripts/index.template.html'),'utf8'),dest));
