let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth= 2;

ctx.moveTo(100,80);
ctx.lineTo(240,110);
ctx.lineTo(400,300);
ctx.lineTo(210, 220);

ctx.moveTo(100,80)
ctx.lineTo(350,400)
ctx.lineTo(400,300)
ctx.lineTo(285,320)

ctx.moveTo(240,110)
ctx.lineTo(370,220)
ctx.lineTo(400,300)
ctx.lineTo(490,230)
ctx.lineTo(370,220)
ctx.lineTo(410,120)
ctx.lineTo(490,120)
ctx.lineTo(540,155)
ctx.lineTo(540,190)
ctx.lineTo(490,230)
ctx.lineTo(470,400)
ctx.lineTo(430,460)
ctx.lineTo(400,460)
ctx.lineTo(350,400)

ctx.moveTo(540,155)
ctx.lineTo(680,160)
ctx.lineTo(540,190)

ctx.moveTo(430,460)
ctx.lineTo(350,600)
ctx.lineTo(288,322)
ctx.lineTo(240,400)
ctx.lineTo(240,700)
ctx.lineTo(350,600)

ctx.moveTo(240,700)
ctx.lineTo(200,750)
ctx.lineTo(240,400)


ctx.strokeStyle='#475749';
ctx.stroke();

