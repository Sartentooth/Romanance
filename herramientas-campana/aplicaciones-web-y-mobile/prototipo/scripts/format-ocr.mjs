// Correcciones de estructura; el OCR recibido permanece intacto en dmg-source.json.
const metadata=/^(?:Armadura|Arma|Anillo|Bast[oó]n|Objeto\s+maravilloso|Pergamino|Poci[oó]n|Vara|Varita)\s*[(,]/;
const rarity=/\b(?:com[uú]n|infrecuente|rar[oa]|legendari[oa]|artefacto|variable)\b/i;
const heading=s=>{const letters=s.replace(/[^a-záéíóúñü]/gi,'');return letters.length>=3&&letters.replace(/[^A-ZÁÉÍÓÚÑÜ]/g,'').length/letters.length>=.65;};
export function firstEntry(text){
 const lines=text.split('\n');let cut=lines.length;
 for(let i=1;i<lines.length;i++)if(metadata.test(lines[i])&&rarity.test(lines.slice(i,i+3).join(' '))){
  cut=i;
  // Solo retirar el título contiguo reconocible; no buscar hacia atrás en la prosa.
  while(cut>1&&i-cut<3&&heading(lines[cut-1]))cut--;
  break;
 }
 return {text:lines.slice(0,cut).join('\n').trim(),separated:cut<lines.length};
}
export function reflowOCR(text){
 const lines=text.replace(/([a-záéíóúñ])-\r?\n([a-záéíóúñ])/gi,'$1$2').split(/\r?\n/),out=[];let prose=[];
 const flush=()=>{if(prose.length){out.push(prose.join(' '));prose=[];}};
 for(let i=0;i<lines.length;i++){
  const raw=lines[i];
  const line=raw.trim();
  if(!line){flush();continue;}
  if(/^(?:\d+\s+)?CAP[ÍI]TULO\b.*TESOROS|^CAP[ÍI]TULO\s+\d+\s*[|/]/i.test(line))continue;
  const list=/^(?:[•·+]\s+|[-–]\s+)/.test(line),title=heading(line)&&line.length<100;
  if(list||title){flush();out.push(list?line:'### '+line);continue;}
  if(metadata.test(line)&&out.length===0&&prose.length===0){
   let meta=line;
   while((meta.match(/\(/g)||[]).length>(meta.match(/\)/g)||[]).length&&i+1<lines.length)meta+=' '+lines[++i].trim();
   out.push(meta);continue;
  }
  // Una propiedad con nombre empieza un párrafo, no cada renglón impreso del PDF.
  if(prose.length&&/^[A-ZÁÉÍÓÚÑ][^.!?:]{1,45}\.\s+/.test(line)&&/[.!?:]$/.test(prose.at(-1)))flush();
  prose.push(line);
 }
 flush();return out.join('\n\n');
}
export function layoutOCR(text){
 const tables=[];
 // Estas columnas son reconocibles en la extracción. Un valor ilegible se conserva
 // como texto y se señala; no se reconstruyen cargas por intuición.
 const protectedText=text.replace(/^Conjuro\s+Coste en cargas\s*\n([\s\S]*?)(?=^[A-ZÁÉÍÓÚÑ][^.!?:\n]{1,45}\.\s|\n\s*\n|$(?![\s\S]))/gm,(plain,body)=>{
  const rows=[[{text:'Conjuro',header:true},{text:'Coste en cargas',header:true}],...body.trim().split('\n').filter(Boolean).map(line=>{
   const m=line.trim().match(/^(.*?)\s+(\d+)$/);
   return [{text:m?m[1]:line.trim()},{text:m?m[2]:'Pendiente de cotejo'}];
  })];
  tables.push({plain:plain.trim(),rows,token:'ocrtabletoken'+tables.length});return '\n\n'+tables.at(-1).token+'\n\n';
 });
 let description=reflowOCR(protectedText);
 for(const table of tables)description=description.replace(table.token,table.plain);
 return {description,tables:tables.map(t=>({plain:t.plain,start:description.indexOf(t.plain),end:description.indexOf(t.plain)+t.plain.length,rows:t.rows,caption:'Conjuros · OCR pendiente de cotejo'}))};
}
