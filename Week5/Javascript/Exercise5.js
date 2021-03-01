function myClickEvent(){
  var element = document.getElementById('circle');
  var changeopacity =  parseFloat(element.style.opacity);
  element.style.opacity=changeopacity-0.1;
}

function myLoad(){
  var element = document.getElementById('circle');
    element.style.opacity=0.5;
    element.addEventListener('click', myClickEvent);
}

document.addEventListener('DOMContentLoaded', myLoad);
