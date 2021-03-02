function myClickEvent(){

  setInterval(changeopacity, 100);
}
function changeopacity()
{

    var element = document.getElementById('circle');
    var getopacity=parseFloat(element.style.opacity);
    element.style.opacity=getopacity-0.01;
}
function myLoad(){
  var element = document.getElementById('circle');
  element.style.opacity=1;
  element.addEventListener('click', myClickEvent);
}

document.addEventListener('DOMContentLoaded', myLoad);
