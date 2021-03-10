
var element = document.getElementById('myChart').getContext('2d');
var chartType = 'bar'; // The type of chart we want to create

// The data for our dataset
var chartData = {
    labels: ['China', 'India', 'United States', 'Indonesia', 'Pakistan', 'Brazil'],
      datasets: [{
        label: 'Population',
        backgroundColor:['green', 'red','blue','orange', 'grey','yellow','violet'],
        borderColor:'black',
        hoverBorderWidth:3,
        hoverBorderColor:'black',
        borderWidth:1,
        data: [1439323776, 1380004385, 331002651, 273523615, 220892340, 212559417]
    }]


};

// Configuration options go here
var chartOptions = {
title:{
display:true,
text:'Population of the countries',
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
