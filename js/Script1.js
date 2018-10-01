// JavaScript source code
console.log("hello");
var Cw = window.innerWidth;
var Ch = window.innerHeight;
var Dx = Cw / 2;
var Dy = Ch / 2;



var canvas = document.createElement("canvas");
canvas.width = Cw;
canvas.height = Ch;

document.body.insertBefore(canvas, document.body.childNodes[0]);
var ctx = canvas.getContext("2d");

var radius = 90;


setInterval(circle, 1);


function circle() {

 for(var i=0;i<1000;i++){
     ctx.strokeStyle = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
     ctx.fillStyle = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);

     ctx.fill();
   ctx.beginPath();
     ctx.arc(Math.floor(Math.random() * (Cw) + 1), Math.floor(Math.random() * (Ch) + 1), Math.floor(Math.random() * (20) + 1), 0, 2 * Math.PI);
   ctx.stroke();
}
    
}

