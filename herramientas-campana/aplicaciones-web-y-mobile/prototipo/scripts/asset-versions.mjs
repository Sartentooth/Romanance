import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
// Versiones reproducibles: solo cambia la URL si cambia el contenido del recurso.
export function versionAssets(template,dist){
 return template.replace(/\b(src|href)="([^"?#]+\.(?:js|css))"/g,(_,attr,file)=>{
  const data=fs.readFileSync(path.join(dist,file),'utf8').replace(/\r\n/g,'\n');
  const version=createHash('sha256').update(data).digest('hex').slice(0,12);
  return `${attr}="${file}?v=${version}"`;
 });
}
