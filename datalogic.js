$(document).ready(function(){

var queryURL = "https://corona-api.com/countries"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.data[213]);
    
})



})