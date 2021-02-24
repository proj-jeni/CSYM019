

function updateP1original(){
  var element = document.getElementById('P1');
  element.firstChild.nodeValue='Heading 1';
}
function updateP2original(){
  var element = document.getElementById('P2');
  element.firstChild.nodeValue='Content 1';
}

function updateP2content()
{
var element = document.getElementById('P2');
element.firstChild.nodeValue='Content 2';
element.addEventListener('mouseover', updateP2original);
}

function updateP1content()
{
var element = document.getElementById('P1');
element.firstChild.nodeValue='Heading 2';
element.addEventListener('mouseleave', updateP1original);

}

function myloadnext(){
  var element = document.getElementById('P2');
  element.addEventListener('click', updateP2content);
  var element = document.getElementById('P1');
    element.addEventListener('click', updateP1content);

}
document.addEventListener('DOMContentLoaded', myloadnext);
