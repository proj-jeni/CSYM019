function changecontent()
{
var myvariable1=document.getElementById('P1');
var myvariable2=document.getElementById('P2');
myvariable1.firstChild.nodeValue='Heading 2';
myvariable2.firstChild.nodeValue='Content 2';

}
document.addEventListener('DOMContentLoaded', changecontent);
