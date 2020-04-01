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

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
    console.log(response.data[213].latest_data.confirmed);

    covidObject = response.data;
    console.log(covidObject);

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
    cases.append("Confirmed Cases: " + globalCases);
    deaths.append("Total Deaths: " + globalDeaths);
    critical.append("Critical Cases: " + globalCritical);
    recovered.append("People Recovered: " + globalRecovered);

   


    
})



})