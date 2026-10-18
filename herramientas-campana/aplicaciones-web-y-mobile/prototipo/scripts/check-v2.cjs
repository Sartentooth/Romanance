const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
global.BotinCore=require('../dist/core.js');
const C=require('../dist/core-v2.js'),context={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../dist/catalog-data.js'),'utf8'),context);
const entries=JSON.parse(JSON.stringify(context.window.CATALOG_DATA)),tables=JSON.parse(JSON.stringify(context.window.TABLE_DATA));
let seed=1729;const rng=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
const initial=C.validate(C.initial());
assert.equal(initial.version,2);
assert.equal(new Set(entries.map(e=>e.id)).size,entries.length,'IDs únicos');
assert.equal(Object.keys(tables.tables).length,20);
for(const rows of Object.values(tables.tables)){assert.equal(rows[0].start,1);assert.equal(rows.at(-1).end,100);for(let i=1;i<rows.length;i++)assert.equal(rows[i].start,rows[i-1].end+1);for(let roll=1;roll<=100;roll++){const row=rows.find(r=>roll>=r.start&&roll<=r.end);assert.ok(entries.some(e=>e.id===row.itemId));}}
const gear=C.equipmentTable(tables,rng);assert.equal(gear.length,100);assert.deepEqual(gear.slice(0,82),tables.equipment);assert.equal(new Set(gear.slice(82,91).map(e=>e.name)).size,9);assert.equal(new Set(gear.slice(91).map(e=>e.name)).size,9);
assert.equal(C.coinValue({ppt:1,po:2,pe:1,pp:3,pc:4}),1284);
assert.equal(C.coinText(C.payment(2.35,{po:3}).change),'1 PE · 1 PP · 5 PC');
assert.equal(C.coinText(C.payment(2.35,{po:3},false).change),'6 PP · 5 PC');
assert.equal(C.payment(15,{po:10}).short,5);assert.throws(()=>C.payment(1,{po:.1}));
for(const amount of [0,.01,.95,9.5,95,500,4400,36000,330000])for(let i=0;i<50;i++){const r=C.wealth(amount,rng);assert.equal(C.coinValue(r.coins)+r.valuables.reduce((n,v)=>n+C.cp(v.price),0),C.cp(amount));}
for(let level=1;level<=20;level++)for(let i=0;i<50;i++){const r=C.generate({...C.settings(),level,cr:level,kind:'hoard'},entries,tables,'quick',rng);assert.ok(r.items.every(e=>C.RARITIES.indexOf(e.rarity)<=[2,3,4,4][C.tier(level)]));assert.equal(C.coinValue(r.coins)+r.valuables.reduce((n,v)=>n+C.cp(v.price),0),C.cp(r.budget));assert.equal(r.warnings.length,0);}
for(let i=0;i<100;i++){const r=C.generate({...C.settings(),magicPct:100,maxMagic:1},entries,tables,'manual',rng);assert.equal(r.items.filter(e=>e.magic).length,1);}
assert.equal(C.generate({...C.settings(),kind:'personal',magicPct:100,maxMagic:20},entries,tables,'quick',rng).items.length,0,'Personal rápido no usa los controles manuales');
assert.deepEqual(C.WEIGHTS,[[54,37,9,0,0],[30,51,17,2,0],[11,23,36,23,7],[0,0,20,44,36]]);
const longsword=entries.find(e=>e.english==='Longsword'),general=initial.merchants[0],tomor=initial.merchants.find(e=>e.id==='tomor');
assert.equal(C.craft(longsword,general,3).total,22.5,'No bloquear por herramientas; precisión a cobre');
assert.equal(C.craft(longsword,general,3).days,6);assert.equal(C.craft(longsword,tomor,3).days,3);
const magic={...longsword,magic:true,rarity:'Infrecuente',craftMode:'magic',needsBase:true,price:null};
assert.equal(C.craft(magic,null,1,{base:longsword}).total,215);assert.equal(C.craft(magic,null,1,{base:longsword,makeBase:true}).total,207.5);assert.equal(C.craft(magic,null,1,{base:longsword,makeBase:true}).days,12);
assert.equal(C.craft({...magic,craftMode:'scroll'},null,1,{scrollLevel:2,extras:10}).total,110);
assert.equal(C.craft(entries.find(e=>e.english==='Potion of Healing')).total,25);
const rocio=entries.find(e=>e.id==='romanance:rocio');assert.equal(C.craft(rocio).days,7);assert.equal(C.craft(rocio).total,25);assert.equal(rocio.price,null);assert.equal(C.effective(entries,'romanance').some(e=>e.english==='Potion of Healing'),false);assert.ok(C.effective(entries,'romanance').some(e=>e.id===rocio.id));
const own={id:'custom:fixture',name:'Regla QA',type:'rule',category:'Reglas',description:'Fixture',attributes:'',price:null,magic:false,loot:false,rarity:'Mundano',scope:['romanance'],origin:'QA',status:'QA',parent:'',craftMode:'none',tool:'',days:null,materials:null,metadata:{author:'QA',version:'1',license:'Prueba',source:'Fixture'}};
const fixture=C.initial();fixture.entries.push(own);C.validate(fixture);
const pkg=C.packageContent([own]);assert.deepEqual(pkg.entries[0].scope,[]);assert.equal(pkg.shops,undefined);assert.equal(pkg.campaigns,undefined);
const merged=C.mergePackage(C.initial(),pkg,['free']);assert.equal(merged.added,1);assert.ok(merged.db.disabled.free.includes(own.id));assert.equal(C.effective([...entries,...merged.db.entries],'free',merged.db.disabled).some(e=>e.id===own.id),false);
assert.equal(C.mergePackage(merged.db,pkg,['free']).skipped,1);
const copied=C.mergePackage(merged.db,pkg,['free'],'copy');assert.equal(copied.added,1);assert.equal(new Set(copied.db.entries.map(e=>e.id)).size,2);
assert.deepEqual(C.validate(JSON.parse(JSON.stringify(copied.db))),copied.db);
for(const mutate of [d=>d.entries[0].scope=['missing'],d=>d.settings.magicPct=101,d=>d.settings.maxMagic=-1,d=>d.entries[0].price='gratis',d=>d.theme='invalid',d=>d.entries[0].metadata.author={bad:true}]){const bad=structuredClone(fixture);mutate(bad);assert.throws(()=>C.validate(bad));}
const older=global.BotinCore.initial();older.entries.push({...own,scope:['romanance']});const migrated=C.validate(older);assert.equal(migrated.entries[0].name,'Regla QA');assert.equal(migrated.version,2);
console.log('OK · 2000 resultados D100; 1000 loots por bandas; presupuesto exacto; límites mágicos; monedas; crafteo; Rocío; migración y paquetes con colisiones/activación.');

assert.equal(C.bonusProfile('Armas','Hoz',1).rarity,'Infrecuente');
assert.equal(C.bonusProfile('Armas','Hoz',3).rarity,'Muy raro');
assert.equal(C.bonusProfile('Armaduras','Cota de malla',1).rarity,'Raro');
assert.equal(C.bonusProfile('Armaduras','Cota de malla',3).rarity,'Legendario');
assert.equal(C.bonusProfile('Armaduras','Escudo',1).rarity,'Infrecuente');
assert.throws(()=>C.bonusProfile('Equipo','Cristal',1));
const enhanced={...own,type:'item',category:'Armas',magic:true,rarity:'Infrecuente',enhancementBonus:1,bonusEffect:C.bonusProfile('Armas','Hoz',1).effect,componentsNote:'Materiales de prueba incluidos en la receta.'};
C.validatePackage(C.packageContent([enhanced]));assert.ok(C.snapshot(enhanced).description.includes('Bonificador +1'));
console.log('OK · plantillas de armas/armaduras/escudos, componentes exportables y efectos conservados en loot.');

assert.equal(C.magicValue('Raro',false,1500),5500);
assert.equal(C.magicValue('Infrecuente',false,1),401);
assert.equal(C.magicValue('Común',true),50);
assert.equal(C.magicValue('Artefacto'),null);

assert.equal(C.bonusProfile('Armas','Espada',4).homebrew,false);assert.equal(C.bonusProfile('Armas','Espada',4).rarity,'Legendario');assert.equal(C.bonusProfile('Armas','Espada',4).designGuide,true);
assert.equal(C.bonusProfile('Armaduras','Escudo',5).rarity,null);
assert.ok(C.craft({...enhanced,enhancementBonus:4,craftMode:'magic'}).error);
assert.ok(C.craft({...enhanced,enhancementBonus:5,craftMode:'manual',days:null,materials:null}).error);
assert.equal(C.entryText({description:'Name: Espadón\nDamage: 2d6',attributes:'Name: Espadón\nDamage: 2d6',magicEffect:'Luz tenue.',bonusEffect:'Bonificador +2.'}),'Name: Espadón\nDamage: 2d6\n\nLuz tenue.\n\nBonificador +2.');
assert.equal(C.snapshot({...enhanced,magicEffect:'Cambia de color.'}).description.includes('Cambia de color.'),true);
console.log('OK · +5 como excepción, receta pendiente, texto sin duplicados y propiedad mágica conservada.');

const legendaryBase={...enhanced,enhancementBonus:4,rarity:'Legendario',craftMode:'magic',needsBase:true};
const legendaryMade=C.craft(legendaryBase,null,1,{base:{price:50},makeBase:false});
assert.equal(legendaryMade.total,100050);assert.equal(legendaryMade.days,250);
assert.ok(C.craft({...legendaryBase,rarity:'Muy raro'}).error);
console.log('OK · +4 legendario según guía de diseño DMG; +5 fuera de guía; costo de base separado.');

const spellImbued={...enhanced,enhancementBonus:0,bonusEffect:'',rarity:'Común',craftMode:'magic',needsBase:true,magicSpell:{id:'srd:spell:light',name:'Luz',level:0,activation:'Según el conjuro',usage:'daily',uses:1,recovery:'Al amanecer',notes:'Prueba de objeto sin bonificador.'}};
assert.deepEqual(C.magicGuidance(spellImbued),[]);assert.equal(spellImbued.enhancementBonus,0);
const supplied=C.craft(spellImbued,null,1,{base:{price:100,category:'Equipo'},baseOwned:true});
assert.equal(supplied.total,50);assert.equal(supplied.days,5);
assert.equal(C.craft(spellImbued,null,1,{base:{price:100}}).total,150);
assert.equal(C.craft(spellImbued,null,1,{base:{price:100},makeBase:true}).total,100);
assert.equal(C.craft(spellImbued,null,1,{base:{price:100},makeBase:true}).days,15);
assert.equal(C.craft({...spellImbued,price:null},null,1,{base:{price:null},baseOwned:true}).purchase,null);
assert.ok(C.snapshot(spellImbued).description.includes('Conjuro: Luz'));assert.ok(!C.snapshot(spellImbued).description.includes('Bonificador'));
const before=JSON.stringify(spellImbued);C.magicGuidance(spellImbued);assert.equal(JSON.stringify(spellImbued),before);
assert.equal(C.magicGuidance({...spellImbued,magicSpell:{...spellImbued.magicSpell,level:1,usage:'atwill'}}).length,1);
assert.equal(C.magicGuidance({...spellImbued,magicSpell:{...spellImbued.magicSpell,level:2}}).length,1);
const packSpell=C.packageContent([spellImbued]);C.validatePackage(packSpell);assert.equal(packSpell.entries[0].magicSpell.name,'Luz');
const badSpell=structuredClone(packSpell);badSpell.entries[0].magicSpell.usage='inventado';assert.throws(()=>C.validatePackage(badSpell));
console.log('OK · magia sin bono, guía sin mutaciones, conjuros compartibles y base aportada/comprada/fabricada.');

const manualImbued={...spellImbued,craftMode:'manual',materials:80,days:7};
assert.equal(C.craft(manualImbued,null,1,{base:{price:5},baseOwned:true}).total,80);
assert.equal(C.craft(manualImbued,null,1,{base:{price:5}}).total,85);
const ownSpell={...own,id:'custom:qa-spell',type:'spell',name:'Conjuro QA',spell:{level:'0',school:'Evocación',casting:'Acción',range:'Personal',components:'V',duration:'Una hora'}};
const linkedItem={...spellImbued,id:'custom:qa-item',magicSpell:{...spellImbued.magicSpell,id:ownSpell.id,name:ownSpell.name}};
const linkedPackage=C.packageContent([ownSpell,linkedItem]),linkedImport=C.mergePackage(C.initial(),linkedPackage,['free']);
const linkedCopy=C.mergePackage(linkedImport.db,linkedPackage,['free'],'copy');
const remappedSpell=linkedCopy.db.entries.filter(e=>e.type==='spell').at(-1),remappedItem=linkedCopy.db.entries.filter(e=>e.id!==linkedItem.id&&e.magicSpell).at(-1);
assert.equal(remappedItem.magicSpell.id,remappedSpell.id);
console.log('OK · receta propia más base; referencia a conjuro conservada al importar copias.');

const longRecord=C.initial();longRecord.loot.push({id:'long-spell-qa',campaign:longRecord.campaign,date:'2026-10-17T12:00:00Z',items:[C.snapshot({...spellImbued,description:'x'.repeat(30000),attributes:'y'.repeat(5000)})]});C.validate(longRecord);

const moneyDb=C.initial();
assert.deepEqual(C.currencyList(moneyDb).map(c=>c[0]),['po','pp','pc']);
assert.equal(C.displayMoney(15.35,moneyDb),'15 PO · 3 PP · 5 PC');
assert.equal(C.currencyText(C.currencyPayment(2.35,{po:3},moneyDb).change,C.currencyList(moneyDb)),'6 PP · 5 PC');
assert.equal(C.currencyPayment(1,{ppt:1,pe:2},moneyDb).paid,0,'Las monedas deshabilitadas no cuentan como pago oculto');
moneyDb.currencies[moneyDb.campaign].platinum=true;
assert.equal(C.currencyPayment(1,{ppt:1,pe:2},moneyDb).paid,10,'Solo se cuenta la moneda habilitada');
assert.equal(C.displayMoney(15.35,moneyDb),'1 PPT · 5 PO · 3 PP · 5 PC');
moneyDb.campaign='romanance';moneyDb.currencies.romanance.custom.forEach(c=>c.enabled=true);
for(let copper=0;copper<10000;copper+=7){const units=C.currencyList(moneyDb),coins=C.changeIn(copper,units);assert.equal(C.currencyValue(coins,units),copper);}
assert.equal(C.currencyValue({'luz-ocaso':1,'luz-zenith':1,'luz-aurora':1},C.currencyList(moneyDb)),555);
moneyDb.currencies.romanance.custom.find(c=>c.key==='luz-ocaso').enabled=false;
assert.equal(C.currencyPayment(1,{'luz-ocaso':1,'luz-zenith':1},moneyDb).paid,.5);
moneyDb.currencies.romanance.custom.find(c=>c.key==='luz-ocaso').enabled=true;
assert.equal(C.currencyPayment(1,{'luz-ocaso':1,'luz-zenith':1},moneyDb).paid,5.5);
assert.throws(()=>C.currencyValue({unlisted:1},C.currencyList(moneyDb)));
assert.throws(()=>C.currencyValue({po:.5},C.currencyList(moneyDb)));
C.validate(JSON.parse(JSON.stringify(moneyDb)));
const beforeDraft=JSON.stringify(entries);
for(const group of ['Armas','Armaduras'])for(const magic of [false,true]){
 const draft=C.randomDraft(entries,{group,magic},rng);assert.equal(C.referenceGroup(draft.entry),group);assert.equal(!!draft.entry.magic,magic);C.validateEntry({...draft.entry,id:'custom:random-qa'});
 if(magic){assert.ok(draft.entry.enhancementBonus>=1&&draft.entry.enhancementBonus<=3);assert.ok(draft.entry.bonusEffect);}
}
const lightDraft=C.randomDraft(entries,{group:'Equipo',baseId:'srd:item:backpack',magic:true},rng);assert.ok(lightDraft.entry.magicSpell);assert.equal(lightDraft.entry.enhancementBonus,0);C.validateEntry({...lightDraft.entry,id:'custom:random-light-qa'});
assert.equal(JSON.stringify(entries),beforeDraft,'El borrador no modifica las fichas originales');
assert.throws(()=>C.randomDraft(entries,{group:'Armas',baseId:'srd:item:shield',magic:false},rng));
assert.equal(C.uniqueAttributes({description:'Damage: 1d6',attributes:'Damage: 1d6'}),'');
const airship=entries.find(e=>e.english==='Airship');assert.equal(airship.price,40000);assert.ok(airship.description.includes('Passengers: 20'));assert.equal(airship.loot,false);
console.log('OK · monedas por contexto y equivalencias exactas; borradores editables sin mutar fuentes; transporte con propiedades.');
