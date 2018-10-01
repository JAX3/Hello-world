
var cWidth = 600;
var dX = cWidth / 2;
var cX = dX;
var cHeight = 600;
var dY = cHeight / 2;
var cY = dY;
var tweenSpeed = 5;
var radius = 50;
var myCanvas = document.createElement("canvas");
myCanvas.width = cWidth;
myCanvas.height = cHeight;
var context = myCanvas.getContext("2d");
document.body.insertBefore(myCanvas, document.body.childNodes[0]);
myCanvas.addEventListener("click", handleClick);
context.fillStyle = 'red';
drawCircle(200, 300);

function drawCircle(x, y) {
    context.clearRect(0, 0, cWidth, cHeight);
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
}

function handleClick(event) {
    dX = event.pageX;
    dY = event.pageY;
}

function doAnimation() {
    cX += (dX - cX) / tweenSpeed;
    cY += (dY - cY) / tweenSpeed;
    drawCircle(cX, cY);
    requestAnimationFrame(doAnimation);
}
requestAnimationFrame(doAnimation);

