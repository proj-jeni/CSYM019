function mydownEvent(event)
{
    console.log(event.keyCode);
    var element = document.getElementById('circle');
    if (event.keyCode == 37) {
      var getposition=element.offsetLeft;
      element.style.left=getposition - 10 + 'px';

 }
 }
function myLoad(){
  document.addEventListener('keydown', mydownEvent);
}
document.addEventListener('DOMContentLoaded', myLoad);
