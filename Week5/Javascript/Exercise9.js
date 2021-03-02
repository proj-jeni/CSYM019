function downevent(event) {
 if (event.keyCode == 37) {
 setInterval(leftaction, 100);
 }
 if (event.keyCode == 38) {
 setInterval(upaction, 100);
 }
 if (event.keyCode == 39) {
 setInterval(rightaction, 100);
 }
 if (event.keyCode == 40) {
 setInterval(downaction, 100);
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
