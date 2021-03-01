
function myCLickEvent()
{
  alert('The button was pressed');
}

function myLoad(){
  var element = document.getElementById('circle');
  element.addEventListener('click', myCLickEvent );
}

document.addEventListener('DOMContentLoaded', myLoad);
