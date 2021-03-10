function myClickFunction() {
  //alert('button is clicked')
  chart.data.datasets[0].data=[60,50, 40, 30,20, 10]
  chart.options.title.text = 'Ages-10 years ago';
  chart.update();
}
function myLoadFunction() {
 var getbutton = document.getElementById('button');
 getbutton.addEventListener('click', myClickFunction);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);


var element = document.getElementById('myChart').getContext('2d');
var chartType = 'pie'; // The type of chart we want to create

// The data for our dataset
var chartData = {
    labels: ['Ravi', 'Emily', 'Aron', 'Kala', 'Maaya', 'John'],
      datasets: [{
        label: 'Population',
        backgroundColor:['#F1948A', '#BB8FCE','#5DADE2','#1ABC9C', '#F5B041 ','#85929E'],
        borderColor:'black',
        hoverBorderWidth:3,
        hoverBorderColor:'black',
        borderWidth:1,
        data: [70,60, 50, 40,30, 20]
    }]


};

// Configuration options go here
var chartOptions = {
title:{
display:true,
text:'Ages-2 years ago',
fontSize:20,
fontFamily:'Arial'
},
legend:{
position:'right'
},
layout:{
padding:{
left:10,
top:0,
bottom:0,
right:0
}
}
};

// new Chart(x, y) creates a new chart object where:
// x is the object for the html element.
// y is JSON object of type {a,b,c} see below.

var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});
