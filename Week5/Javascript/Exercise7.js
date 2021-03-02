function mydownEvent()
{

    var element = document.getElementById('circle');
    var getposition=element.offsetLeft;
    element.style.left=getposition - 10 + 'px';
}
function myLoad(){
  document.addEventListener('keydown', mydownEvent);
}
document.addEventListener('DOMContentLoaded', myLoad);
