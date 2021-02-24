function click() {
 var element = document.getElementById('input1');
 var div = document.getElementById('result');
 div.firstChild.nodeValue = element.value;
}
function myload() {
 var element = document.getElementById('input1');
 element.addEventListener('keyup', click);
}
document.addEventListener('DOMContentLoaded', myload);
