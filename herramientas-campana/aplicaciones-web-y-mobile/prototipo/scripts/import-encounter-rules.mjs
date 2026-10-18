import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../../..'),dir=path.join(root,'data/archivos md/dnd-5e-srd-markdown-master');
const table=(file,marker)=>{const text=fs.readFileSync(path.join(dir,file),'utf8'),body=text.slice(text.indexOf(marker)).match(/<table>[\s\S]*?<\/table>/)?.[0];if(!body)throw Error('Falta tabla fuente: '+marker);return [...body.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].filter(m=>!m[1].includes('<th>')).map(m=>[...m[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map(c=>c[1].replace(/<[^>]+>/g,'').trim()));};
const budgets=table('gameplay-toolbox.md','**XP Budget per Character**').map(row=>row.map(v=>Number(v.replaceAll(',',''))));
const xpByCR={};for(const row of table('monsters.md','**Experience Points by Challenge Rating**'))for(let i=0;i<row.length;i+=2)xpByCR[row[i]]=row[i+1].split(' or ').map(v=>Number(v.replaceAll(',','')));
if(budgets.length!==20||budgets.some((r,i)=>r[0]!==i+1||r.length!==4||r.some(v=>!Number.isFinite(v)))||Object.keys(xpByCR).length!==34)throw Error('Tabla de encuentros incompleta.');
fs.writeFileSync(path.join(root,'herramientas-campana/aplicaciones-web-y-mobile/prototipo/dist/encounter-data.js'),'/* Tablas SRD 5.2.1 locales; no multiplicadores de 2014. */\nwindow.ENCOUNTER_DATA='+JSON.stringify({budgets,xpByCR,source:'SRD 5.2.1 · Gameplay Toolbox: Combat Encounters; Monsters: Experience Points by Challenge Rating'})+';\n');
