
var element = document.getElementById('myChart').getContext('2d');
var chartType = 'pie'; // The type of chart we want to create

// The data for our dataset
var chartData = {
    labels: ['Russia', 'China', 'Australia', 'India', 'Argentina', 'Algeria'],
      datasets: [{
        label: 'Population',
        backgroundColor:['#F1948A', '#BB8FCE','#5DADE2','#1ABC9C', '#F5B041 ','#85929E'],
        borderColor:'black',
        hoverBorderWidth:3,
        hoverBorderColor:'black',
        borderWidth:1,
        data: [6,5, 4, 3,2, 1]
    }]


};

// Configuration options go here
var chartOptions = {
title:{
display:true,
text:'Size of countries in square miles',
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
