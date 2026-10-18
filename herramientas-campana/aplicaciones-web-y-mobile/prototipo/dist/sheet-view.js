/* Presentación compartida de fichas. Datos fuente y exportaciones siguen en texto. */
(function(root){'use strict';
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const abilities={STR:'Fuerza',DEX:'Destreza',CON:'Constitución',INT:'Inteligencia',WIS:'Sabiduría',CHA:'Carisma'};
 const fields={AC:'Clase de armadura',HP:'Puntos de golpe',Initiative:'Iniciativa',Speed:'Velocidad',Skills:'Habilidades',Senses:'Sentidos',Languages:'Idiomas',CR:'VD / PX',Resistances:'Resistencias',Immunities:'Inmunidades',Vulnerabilities:'Vulnerabilidades',Gear:'Equipo',Name:'Nombre',Damage:'Daño',Properties:'Propiedades',Mastery:'Maestría',Weight:'Peso',Cost:'Costo',Casting:'Lanzamiento','Casting Time':'Tiempo de lanzamiento',Range:'Alcance',Components:'Componentes',Duration:'Duración'};
 const fieldPattern=new RegExp('^('+Object.keys(fields).sort((a,b)=>b.length-a.length).join('|')+')(?::\\s*|\\s+)(.+)$');
 const inline=s=>esc(String(s).replace(/&emsp;/g,'  ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&')).replace(/_([^_\n]+)_/g,'<em>$1</em>');
 const paragraph=s=>inline(s).replace(/^<em>([^<]{1,90}[.:])<\/em>\s*/, '<strong>$1</strong> ').replace(/^([A-ZÁÉÍÓÚÑ][^<.!?:\n]{1,45}[.:])\s+/, '<strong>$1</strong> ');
 function tableHTML(rows,caption,stats=false){
  return `<div class="sheet-table-scroll" tabindex="0" role="region" aria-label="${esc(caption)}"><table class="sheet-table${stats?' ability-table':rows.every(r=>r.length===2&&r[0].header&&!r[1].header)?' sheet-fields':''}"><caption>${esc(caption)}</caption>${rows.map((row,i)=>`<tr>${row.map((cell,j)=>{const th=cell.header,tag=th?'th':'td',span=(key)=>Number.isInteger(cell[key])&&cell[key]>1&&cell[key]<=30?` ${key}="${cell[key]}"`:'';return `<${tag}${th?` scope="${i===0&&row.every(c=>c.header)?'col':'row'}"`:''}${span('colspan')}${span('rowspan')}>${esc(cell.text)}</${tag}>`;}).join('')}</tr>`).join('')}</table></div>`;
 }
 function sourceTable(t,name){
  const stats=t.rows.flatMap(row=>{const out=[];for(let i=0;i+3<row.length;i++)if(Object.hasOwn(abilities,row[i].text)){out.push([row[i].text,...row.slice(i+1,i+4).map(c=>c.text)]);i+=3;}return out;});
  if(stats.length===6&&new Set(stats.map(r=>r[0])).size===6){
   const rows=[[...['Característica','Puntuación','Modificador','Salvación'].map(text=>({text,header:true}))],...stats.map(r=>[{text:abilities[r[0]]+' ('+r[0]+')',header:true},...r.slice(1).map(text=>({text}))])];
   return tableHTML(rows,'Características',true);
  }
  return tableHTML(t.rows,t.caption||'Tabla · '+name);
 }
 function textHTML(text){
  const lines=String(text).trim().split(/\r?\n/),out=[];let pairs=[],prose=[];
  const flushPairs=()=>{if(pairs.length){out.push(tableHTML(pairs,'Datos de referencia'));pairs=[];}};
  const flushProse=()=>{if(prose.length){out.push(`<p class="sheet-prose">${paragraph(prose.join('\n').trim())}</p>`);prose=[];}};
  for(const line of lines){
   const value=line.trim(),heading=value.match(/^#{1,6}\s+(.+)/),field=value.match(fieldPattern),key=field?.[1];
   if(field&&Object.hasOwn(fields,key)){
    flushProse();const initiative=key==='AC'?field[2].match(/^(.*?)\s+Initiative\s+(.+)$/):null;
    pairs.push([{text:fields[key],header:true},{text:initiative?initiative[1]:field[2]}]);
    if(initiative)pairs.push([{text:fields.Initiative,header:true},{text:initiative[2]}]);
   }else if(!value){flushProse();/* Un salto entre datos no crea otra tabla. */}
   else{flushPairs();if(heading){flushProse();out.push(`<h4 class="sheet-heading">${esc(heading[1])}</h4>`);}else prose.push(line);}
  }
  flushProse();flushPairs();return out.join('');
 }
 function render(entry={},fullText=entry.description||''){
  const text=String(fullText),description=String(entry.description||'');let cursor=0,out='';
  const tables=Array.isArray(entry.descriptionTables)?entry.descriptionTables:[];
  for(const t of tables){
   if(!t||!Number.isInteger(t.start)||!Number.isInteger(t.end)||t.start<cursor||t.end<=t.start||t.end>description.length||text.slice(t.start,t.end)!==t.plain||!Array.isArray(t.rows)||!t.rows.length||t.rows.length>400||!t.rows.every(r=>Array.isArray(r)&&r.length<=40&&r.every(c=>c&&typeof c.text==='string')))continue;
   out+=textHTML(text.slice(cursor,t.start))+sourceTable(t,entry.name||'Ficha');cursor=t.end;
  }
  return out+textHTML(text.slice(cursor));
 }
 const api={render};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.BotinSheets=api;
})(typeof window!=='undefined'?window:globalThis);
