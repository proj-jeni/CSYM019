
var interval = 0;
function downevent(event) {
  clearInterval(interval);
 if (event.keyCode == 37) {
 interval=setInterval(leftaction, 10);
 }
 if (event.keyCode == 38) {
 interval=setInterval(upaction, 10);
 }
 if (event.keyCode == 39) {
 interval=setInterval(rightaction, 10);
 }
 if (event.keyCode == 40) {
 interval=setInterval(downaction, 10);
 }
 if (event.keyCode == 32) {
clearInterval(interval);
 }

}

function leftaction() {
 var element = document.getElementById('circle');
 var moveLeft = element.offsetLeft;
 element.style.left = moveLeft - 1 + 'px';
}
function upaction() {
 var element = document.getElementById('circle');
 var moveTop = element.offsetTop;
 element.style.top = moveTop - 1 + 'px';
}
function rightaction() {
 var element = document.getElementById('circle');
 var moveRight = element.offsetLeft;
 element.style.left = moveRight + 1 + 'px';
}
function downaction() {
 var element = document.getElementById('circle');
 var moveDown = element.offsetTop;
 element.style.top = moveDown + 1 + 'px';
}



function myLoad() {
 document.addEventListener('keydown', downevent);
}
document.addEventListener('DOMContentLoaded', myLoad);
