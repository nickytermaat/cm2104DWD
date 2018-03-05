/**
 * Created by john on 10/03/2016.
 */

/**
var cat = document.querySelector("img");
var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 20) + "px";
    cat.style.left = (Math.cos(angle) * 200) + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
*/

var context;
var x=0;
var y=0;
var dx=5;
var dy=5;

function init() {
    context= catCanvas.getContext('2d');
    setInterval(drawImage,10);
}
function drawImage() {
    var canvas = document.getElementById("catCanvas");
    context.clearRect(0,0,1000,350)
    var img = document.getElementById("catImage");
    context.drawImage(img,x,y,50,50);

    //Boundary Logic
    if(x<0 || x>1000) dx=-dx;
    if(y<0 || y>350) dy=-dy;
    x+=dx;
    y+=dy;
}

//
// function draw() {
//   context.clearRect(0,0,1000,350)
//   context.beginPath();
//   context.fillStyle="#0000ff";
//   // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
//   context.arc(x,y,20,0,Math.PI*2,true);
//   context.closePath();
//   context.fill();
//
//   //Boundary Logic
//   if(x<0 || x>1000) dx=-dx;
//   if(y<0 || y>350) dy=-dy;
//   x+=dx;
//   y+=dy;
// }
