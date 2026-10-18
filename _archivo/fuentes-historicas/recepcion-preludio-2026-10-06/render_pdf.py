from pathlib import Path
import json
import pypdfium2 as pdfium
from PIL import Image, ImageDraw
out=Path(__file__).parent
tmp=out/'revision-visual'
tmp.mkdir(exist_ok=True)
for record in json.loads((out/'inventario.json').read_text(encoding='utf-8')):
    if not record['archivo'].endswith('.pdf'): continue
    pdf=pdfium.PdfDocument(record['archivo'])
    thumbs=[]
    for n in range(len(pdf)):
        im=pdf[n].render(scale=1.25).to_pil().convert('RGB')
        im.save(tmp/f"{record['id']}-pagina-{n+1}.png")
        im.thumbnail((480,670))
        thumb=Image.new('RGB',(500,705),'#eeeeee')
        thumb.paste(im,((500-im.width)//2,25))
        ImageDraw.Draw(thumb).text((8,5),f"{record['id']} página {n+1}",fill='black')
        thumbs.append(thumb)
    sheet=Image.new('RGB',(500*min(3,len(thumbs)),705*((len(thumbs)+2)//3)),'white')
    for n,im in enumerate(thumbs): sheet.paste(im,((n%3)*500,(n//3)*705))
    sheet.save(tmp/f"{record['id']}-contacto.png")
print('Tres PDF renderizados; trece páginas para revisión textual visual.')
