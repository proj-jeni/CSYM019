function clickme() {
var element = document.getElementById('input1');
alert(element.value);
}
function myload() {
 var element = document.getElementById('button1');
 element.addEventListener('click', clickme);
}
document.addEventListener('DOMContentLoaded', myload);
