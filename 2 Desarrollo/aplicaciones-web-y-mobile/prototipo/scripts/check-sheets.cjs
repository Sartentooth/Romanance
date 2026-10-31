const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const V=require('../dist/sheet-view.js'),ctx={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../dist/catalog-data.js'),'utf8'),ctx);
const entries=ctx.window.CATALOG_DATA,monsters=entries.filter(e=>e.type==='monster');
for(const e of monsters){
 assert.ok(e.descriptionTables?.length,e.name+' conserva sus tablas');
 const html=V.render(e);
 for(const label of ['Puntuación','Modificador','Salvación','Fuerza (STR)','Carisma (CHA)','Clase de armadura','Puntos de golpe'])assert.ok(html.includes(label),e.name+': '+label);
 for(const t of e.descriptionTables)assert.equal(e.description.slice(t.start,t.end),t.plain);
 assert.equal((html.match(/class="sheet-table ability-table"/g)||[]).length,1,e.name);
}
for(const e of entries.filter(e=>e.descriptionTables?.length)){
 const html=V.render(e);
 assert.ok(html.includes('<table'),e.name);
 for(const t of e.descriptionTables)for(const row of t.rows)for(const c of row)assert.equal(typeof c.text,'string');
}
const aboleth=monsters.find(e=>e.name==='Aboleth'),html=V.render(aboleth);
assert.match(html,/Destreza \(DEX\)<\/th><td>9<\/td><td>−1<\/td><td>\+3<\/td>/,'Conservar diferencia de modificador y salvación');
assert.ok(html.includes('Iniciativa'));assert.ok(html.includes('+7 (17)'));assert.ok(html.includes('Eldritch Restoration'));assert.ok(html.includes('Legendary Actions'));
const edit={...aboleth,description:aboleth.description.replace('21','22')};assert.ok(!V.render(edit).includes('ability-table'),'No mostrar tabla vieja al modificar el texto');
const injection=V.render({name:'<img src=x onerror=alert(1)>',description:'<script>alert(1)</script>\nDamage: <img src=x>',descriptionTables:[]});assert.ok(!injection.includes('<script>'));assert.ok(!injection.includes('<img'));assert.ok(injection.includes('&lt;script&gt;'));
assert.ok(V.render({description:'Casting Time: 1 Action'}).includes('<th scope="row">Tiempo de lanzamiento</th>'));
assert.ok(!V.render({description:'Name: Club\nDamage: 1d4 Bludgeoning'}).includes('Name:'));
assert.ok(!V.render({...aboleth,descriptionTables:[{start:0,end:10,plain:aboleth.description.slice(0,10),rows:[[null]]}]}).includes('<table class="sheet-table ability-table"'));
console.log('OK · 330 tablas de características, modificadores y salvaciones distintos, tablas del catálogo, texto editable, encabezados y escape de contenido.');
