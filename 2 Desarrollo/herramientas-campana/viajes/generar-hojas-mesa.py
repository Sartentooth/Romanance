"""Genera los dos PDF A4 de mesa. Ejecutar desde la raíz del repositorio."""
from pathlib import Path
import sys
from math import sin, cos, pi
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, black

OUT=Path("2 Desarrollo/para-borrar/exportaciones-anteriores/pdf")
OUT.mkdir(parents=True,exist_ok=True)
W,H=A4
M=36
INK=HexColor("#263c40")
GRAY=HexColor("#819095")

def text(c,x,y,s,size=10,bold=False):
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold" if bold else "Helvetica",size)
    c.drawString(x,y,s)

def line(c,x,y,x2,y2):
    c.setStrokeColor(GRAY);c.setLineWidth(.45);c.line(x,y,x2,y2)

def section(c,title,y):
    text(c,M,y,title,10,True)
    line(c,M,y-6,W-M,y-6)

def ruled(c,y,n=2):
    for i in range(n):line(c,M,y-i*21,W-M,y-i*21)

p=OUT/"viajes-hoja-de-decisiones-v0.2.pdf"
c=canvas.Canvas(str(p),pagesize=A4)
c.setTitle("Romanance - Hoja compartida de decisiones del viaje")
text(c,M,H-43,"ROMANANCE",11,True)
text(c,M,H-67,"DECISIONES DEL VIAJE",20,True)
text(c,M,H-84,"Registro del grupo. Anoten lo útil; no hace falta completar todos los campos.",9)
text(c,M,733,"Grupo:",10,True);line(c,75,730,325,730)
text(c,345,733,"Fecha / sesión:",10,True);line(c,422,730,W-M,730)
text(c,M,704,"Objetivo / destino:",10,True);line(c,130,701,W-M,701)
section(c,"1  RUTA Y ORGANIZACIÓN",674)
text(c,M,651,"Ruta y transporte elegidos:",9);line(c,175,648,W-M,648)
text(c,M,625,"¿Por qué esa opción?",9);line(c,150,622,W-M,622)
text(c,M,599,"Ritmo:",9);line(c,75,596,195,596)
text(c,210,599,"Días estimados:",9);line(c,295,596,365,596)
text(c,382,599,"Etapas previstas:",9);line(c,471,596,W-M,596)
section(c,"2  ROLES, PREPARATIVOS Y EQUIPO",571)
text(c,M,550,"Rol",9,True);text(c,155,550,"Personaje(s)",9,True);text(c,300,550,"Qué prepara / lleva / falta",9,True)
for i,role in enumerate(["Guía","Vigía","Explorador","Campamentero","Cocinero / Cronista"]):
    y=524-i*37
    text(c,M,y,role,9)
    line(c,155,y-3,282,y-3);line(c,300,y-3,W-M,y-3)
text(c,M,340,"Equipo común / gastos, si quieren anotarlos:",8)
ruled(c,319,2)
section(c,"3  PISTAS Y AVISOS DEL CAMINO",265)
text(c,M,244,"Lo que convenga recordar; pueden añadir quién lo contó.",8)
ruled(c,219,3)
section(c,"4  ENCARGOS Y DESVÍOS (SI SURGEN)",133)
text(c,M,112,"Qué decidimos hacer y dónde. Dejar vacío si no hay encargos ni desvíos.",8)
ruled(c,87,2)
text(c,M,32,"Preparación del viaje | v0.2 | 2026-10-12 | Responsabilidades y equipo a cargo del grupo.",7)
c.showPage();c.save()
print("Generada",p)
if "--solo-hoja" in sys.argv:
    raise SystemExit(0)

# Fichas en blanco y negro, dos juegos iguales de cinco roles.
ROLES=[("Guía","Brújula"),("Vigía","Ojo"),("Explorador","Huella"),("Campamentero","Tienda"),("Cocinero / Cronista","Cuenco y pluma")]

def icon(c,x,y,kind):
    c.setStrokeColor(INK);c.setFillColor(INK);c.setLineWidth(1.7)
    if kind==0:
        c.circle(x,y,16,stroke=1,fill=0)
        q=c.beginPath();q.moveTo(x,y+23);q.lineTo(x+6,y);q.lineTo(x,y-23);q.lineTo(x-6,y);q.close();c.drawPath(q,stroke=1,fill=0)
        c.line(x-22,y,x+22,y)
    elif kind==1:
        q=c.beginPath();q.moveTo(x-24,y);q.curveTo(x-10,y+23,x+10,y+23,x+24,y);q.curveTo(x+10,y-23,x-10,y-23,x-24,y);c.drawPath(q,stroke=1,fill=0)
        c.circle(x,y,8,stroke=1,fill=0);c.circle(x,y,3,stroke=0,fill=1)
    elif kind==2:
        c.saveState();c.translate(x,y);c.rotate(-25)
        c.ellipse(-7,-20,7,6,stroke=1,fill=0)
        for tx,ty,r in [(-9,10,3.2),(-3,15,3.7),(5,17,4),(12,11,4.2)]:c.circle(tx,ty,r,stroke=1,fill=0)
        c.restoreState()
    elif kind==3:
        q=c.beginPath();q.moveTo(x-24,y-16);q.lineTo(x,y+22);q.lineTo(x+24,y-16);q.close();c.drawPath(q,stroke=1,fill=0)
        c.line(x,y+22,x,y-16);c.line(x-30,y-16,x+30,y-16)
        c.line(x-16,y-4,x-25,y-16);c.line(x+16,y-4,x+25,y-16)
    else:
        q=c.beginPath();q.moveTo(x-23,y+1);q.curveTo(x-20,y-20,x+10,y-20,x+13,y+1);c.drawPath(q,stroke=1,fill=0)
        c.line(x-24,y+1,x+14,y+1);c.line(x-14,y-17,x+6,y-17)
        q=c.beginPath();q.moveTo(x+4,y+3);q.lineTo(x+21,y+26);q.curveTo(x+31,y+12,x+17,y+2,x+4,y+3);c.drawPath(q,stroke=1,fill=0)
        c.line(x+4,y+3,x+23,y+23)

p=OUT/"viajes-fichas-de-roles.pdf"
c=canvas.Canvas(str(p),pagesize=A4);c.setTitle("Romanance - Fichas de roles del viaje")
text(c,M,H-43,"ROMANANCE | ROLES DE VIAJE",17,True)
text(c,M,H-64,"Recortar por el círculo exterior. Dos juegos iguales de cinco fichas.",9)
text(c,M,H-81,"El símbolo identifica una función; la ficha no concede poderes ni usos adicionales.",8)
for set_index,top in enumerate([655,340]):
    text(c,M,top+75,"JUEGO "+str(set_index+1),10,True)
    positions=[(145,top),(300,top),(455,top),(222,top-138),(377,top-138)]
    for i,((role,symbol),(x,y)) in enumerate(zip(ROLES,positions)):
        c.setStrokeColor(GRAY);c.setLineWidth(.6);c.circle(x,y,48,stroke=1,fill=0)
        icon(c,x,y+5,i)
        c.setFillColor(INK);c.setFont("Helvetica-Bold",7.5 if i==4 else 8.5);c.drawCentredString(x,y-31,role)
text(c,M,124,"Propuesta visual: brújula, ojo, huella, tienda y cuenco con pluma.",9)
text(c,M,106,"Colocar la ficha junto a quien lleva el rol. Pasarla cuando cambien de función.",9)
text(c,M,88,"Los roles pueden repetirse según el sistema; imprimir más fichas si hace falta.",9)
text(c,M,32,"Símbolos propuestos para testing | v0.1 | 2026-10-12 | Imprimir al 100 %.",7)
c.showPage();c.save()
print("Generados",OUT/"viajes-hoja-de-decisiones.pdf",OUT/"viajes-fichas-de-roles.pdf")
