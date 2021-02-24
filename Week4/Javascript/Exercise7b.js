function clickme() {
 var element = document.getElementById('input1');
 var div = document.getElementById('result');
 div.firstChild.nodeValue = element.value;
 
}
function myload() {
 var element = document.getElementById('button1');
 element.addEventListener('click', clickme);
}
document.addEventListener('DOMContentLoaded', myload);
