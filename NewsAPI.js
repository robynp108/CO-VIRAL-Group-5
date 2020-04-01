var defaultImages = ["https://cdn.shrm.org/image/upload/c_crop,h_617,w_1099,x_0,y_0/c_fit,f_auto,q_auto,w_767/v1/Legal%20and%20Compliance/coronavirus4m_utz5jt?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjAsIngyIjoxMDk5LCJ5MiI6NjE3LCJ3IjoxMDk5LCJoIjo2MTd9fQ%3D%3D","https://resize.hswstatic.com/w_907/gif/becoming-doctor.jpg","https://media.newyorker.com/photos/5e6baf0f0d121d00087dbc7c/master/w_1600%2Cc_limit/Radiohour-Coronavirus.jpg"];

// news API gets stuff from who.int -----------------------------------------------------------------------------------------------------------------
function newsAPIWho() {
    var search = "coronavirus";
    var queryURL = "https://newsapi.org/v2/everything?domains=who.int&language=en&q=" + search + "&apiKey=cf9a884cae0d44aeaf4ca0d7c2183f9d";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // gets first 90 characters of the article title
        var title = response.articles[0].title.slice(0, 70) + "...";
        var url = response.articles[0].url;
        var img = response.articles[0].urlToImage;
        var summary = response.articles[0].description;
        $("#whoText").html(summary);
        $("#whoTitle").text(title);
        $("#whoLink").attr("href",url);
        if (img !== null) {
            $("#whoImg").attr("src",img);
        }
        else {
            $("#whoImg").attr("src",defaultImages[0]);
        }
    });
}

// news API gets stuff from nih.gov -----------------------------------------------------------------------------------------------------------------
function newsAPINih() {
    var search = "coronavirus";
    var queryURL = "https://newsapi.org/v2/everything?domains=nih.gov&language=en&q=" + search + "&apiKey=cf9a884cae0d44aeaf4ca0d7c2183f9d";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // gets first 90 characters of the article title
        var title = response.articles[0].title.slice(0, 70) + "...";
        var url = response.articles[0].url;
        var img = response.articles[0].urlToImage;
        var summary = response.articles[0].description;
        $("#nihText").html(summary);
        $("#nihTitle").text(title);
        $("#nihLink").attr("href",url);
        if (img !== null) {
            $("#nihImg").attr("src",img);
        }
        else {
            $("#nihImg").attr("src",defaultImages[1]);
        }
    });
}

// news API gets stuff from cdc.gov -----------------------------------------------------------------------------------------------------------------
function newsAPICdc() {
    var search = "coronavirus";
    var queryURL = "https://newsapi.org/v2/everything?domains=cdc.gov&language=en&q=" + search + "&apiKey=cf9a884cae0d44aeaf4ca0d7c2183f9d";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // gets first 90 characters of the article title
        var title = response.articles[0].title.slice(0, 70) + "...";
        var url = response.articles[0].url;
        var img = response.articles[0].urlToImage;
        var summary = response.articles[0].description;
        $("#cdcText").html(summary);
        $("#cdcTitle").text(title);
        $("#cdcLink").attr("href",url);
        if (img !== null) {
            $("#cdcImg").attr("src",img);
        }
        else {
            $("#cdcImg").attr("src",defaultImages[2]);
        }
    });
}

// test calls
newsAPIWho();
newsAPINih();
newsAPICdc();

// cdc article API ----------------------------------------------------------------------------------------------------------
function cdcTester() {
    var search = "coronavirus";
    var queryURL = "https://tools.cdc.gov/api/v2/resources/media?topic=" + search;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // gets title
        var title = response.results[response.results.length - 1].name;
        // gets url of original media
        var url = response.results[response.results.length - 1].sourceUrl
        console.log(title);
        console.log(url);
    });
}

// nyt API ------------------------------------------------------------------------------------------------------------------
function nytTester() {
    var search = "coronavirus cdc";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&api-key=le0KAbtsGmrIbHcx26cSF1lU5Hpx2eMm";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
}

// location finder -----------------------------------------------------------------------------------------------------------
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Not Working");
    }
}
function showPosition(position) {
    var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&key=AIzaSyB7_lyGQ2ZwIuFq-A9TcK5VI9ZjtVbLrq8";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.results[0].address_components[2].long_name);
    });
}

