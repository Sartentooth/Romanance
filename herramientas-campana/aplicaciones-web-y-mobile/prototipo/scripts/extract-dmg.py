"""Read the local DMG OCR layer by columns. Never alter the PDF.

This produces reviewable source entries, not verified game mechanics.
The scan without OCR supplied in Downloads is preserved separately.
"""
import json
import re
import unicodedata
from pathlib import Path
import pdfplumber

ROOT = Path(__file__).resolve().parents[4]
SOURCE = ROOT / 'data/archivos md/manuales D&D 2024/Manual Dungeon Master 2024 - Español.pdf'
TARGET = Path(__file__).resolve().parents[1] / 'dist/dmg-source.json'

def norm(text):
    text = unicodedata.normalize('NFD', text.lower())
    return ''.join(c for c in text if not unicodedata.combining(c))

metadata = re.compile(r'^(Armadura|Arma|Anillo|Bast[oó]n|Objeto\s+maravilloso|Pergamino|Poci[oó]n|Vara|Varita)\s*[(,]', re.I)
rarity = re.compile(r'com[uú]n|infrecuente|rar[oa]|legendari[oa]|artefacto|variable', re.I)
groups = {'armadura':'Armaduras','arma':'Armas','anillo':'Anillos','baston':'Bastones','objeto maravilloso':'Objetos maravillosos','pergamino':'Pergaminos','pocion':'Pociones','vara':'Varas','varita':'Varitas'}
lines = []
with pdfplumber.open(SOURCE) as pdf:
    for index in range(227, 327):
        page = pdf.pages[index]
        for left, right in [(0, page.width/2), (page.width/2, page.width)]:
            column = page.crop((left, 0, right, page.height-55))
            for line in column.extract_text_lines(x_tolerance=2):
                value=line['text'].strip()
                if value and not re.match(r'^CAP[ÍI]TULO|^TESOROS\s*\d*$|^\d+$', value):
                    lines.append({'text':value, 'page':index-1, 'pdfPage':index+1, 'top':line['top'], 'bottom':line['bottom'], 'column':left})

starts = []
for index, line in enumerate(lines):
    match = metadata.match(line['text'])
    if not match or not rarity.search(' '.join(x['text'] for x in lines[index:index+3])):
        continue
    heading = []
    for previous in range(index-1, max(-1,index-5), -1):
        text = lines[previous]['text']
        following=lines[previous+1]
        if lines[previous]['page']!=following['page'] or lines[previous]['column']!=following['column'] or following['top']-lines[previous]['bottom']>38:
            break
        letters = ''.join(c for c in text if c.isalpha())
        if not letters or len(text)>105 or not letters.isupper():
            break
        heading.insert(0, text)
    if not heading:
        continue
    start = index-len(heading)
    name = ' '.join(heading).strip()
    starts.append((start,index,name,groups[norm(match.group(1))]))

entries=[]
for position,(start,meta,name,group) in enumerate(starts):
    end=starts[position+1][0] if position+1<len(starts) else len(lines)
    body='\n'.join(x['text'] for x in lines[meta:end])
    # Join a word split at a printed line ending, keeping paragraph text readable.
    body=re.sub(r'([a-záéíóúñ])-\n([a-záéíóúñ])',r'\1\2',body,flags=re.I)
    entries.append({'name':name,'itemGroup':group,'description':body,'page':lines[meta]['page'],'pdfPage':lines[meta]['pdfPage'],'status':'Extracción OCR por columnas · pendiente de cotejo visual'})

TARGET.write_text(json.dumps({'source':str(SOURCE.relative_to(ROOT)),'entries':entries},ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps({'dmgEntries':len(entries),'groups':{g:sum(e['itemGroup']==g for e in entries) for g in sorted(set(groups.values()))}},ensure_ascii=False),flush=True)
