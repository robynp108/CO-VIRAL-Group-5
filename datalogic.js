$(document).ready(function(){

//global variables
var queryURL = "https://corona-api.com/countries"
var globalCases = 0;
var globalDeaths = 0;
var globalCritical = 0;
var globalRecovered = 0;
var cases = $("#cases");
var deaths = $("#deaths");
var critical = $("#critical");
var recovered = $("#recovered");
var countryInput = $("#countryInput");
var searchButton = $("#searchButton");
var countrySearch = $("#countrySearch");
var countryName = $("#countryName");
var countryCases = $("#countryCases");
var countryDeaths = $("#countryDeaths");
var countryCritical = $("#countryCritical");
var countryRecovered = $("#countryRecovered");

function clear(){
    countryInput.empty();
}

//ajax call to get covid API response
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.data[213].latest_data.confirmed);

    covidObject = response.data;
    console.log(covidObject);

    //for loop that loops and totals covid data 
    for (var i = 0; i < covidObject.length; i++){
        globalCases += covidObject[i].latest_data.confirmed;
        globalDeaths += covidObject[i].latest_data.deaths;
        globalCritical += covidObject[i].latest_data.critical;
        globalRecovered += covidObject[i].latest_data.recovered;

    }
    console.log(globalCases);
    console.log(globalDeaths);
    console.log(globalCritical);
    console.log(globalRecovered);

    //appends covid data to DOM
    cases.append("Confirmed Cases: " + globalCases);
    deaths.append("Total Deaths: " + globalDeaths);
    critical.append("Critical Cases: " + globalCritical);
    recovered.append("People Recovered: " + globalRecovered);

    //click event to capture input data
    searchButton.on("click", function(){
        console.log("it works");
        userInput = countryInput.val();
        for (var i = 0; i < covidObject.length; i++){
            //  console.log(covidObject[i].name);
             var country = covidObject[i].name;
             if (userInput.toUpperCase() === country.toUpperCase()){
                 countryName.append("h2");
                 countryName.text(country);
                 countryCases.text("Confirmed Cases: " + covidObject[i].latest_data.confirmed);
                 countryDeaths.text("Total Deaths: " + covidObject[i].latest_data.deaths);
                 countryCritical.text("Critical Cases: " + covidObject[i].latest_data.critical);
                 countryRecovered.text("People Recovered: " + covidObject[i].latest_data.recovered);
                 clear();
             }
        
           
        }
       
    })
    

    
})



})