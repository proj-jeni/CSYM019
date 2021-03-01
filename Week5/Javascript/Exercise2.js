
function myCLickEvent()
{
  var element = document.getElementById('circle');
  element.style.backgroundColor='#33BEFF';

}

function myLoad(){
  var element = document.getElementById('circle');
  element.addEventListener('click', myCLickEvent );
}

document.addEventListener('DOMContentLoaded', myLoad);
