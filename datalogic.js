$(document).ready(function(){

var queryURL = "https://corona-api.com/countries"
var globalCases = 0;
var globalDeaths = 0;
var globalCritical = 0;
var globalRecovered = 0;

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.data[213].latest_data.confirmed);
   


    
})



})