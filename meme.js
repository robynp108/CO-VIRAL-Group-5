var memeUrl = "https://api.giphy.com/v1/gifs/random?api_key=Z1f6UIRsEi27RLQEhLl8rRS14P6LALOH&tag=covid19&rating=g&limit=1";

$.ajax({
    url: memeUrl,
    method: "GET"
}).then(function (response) {
    console.log(response);
    var imageUrl = response.data.images.fixed_height.url;
    console.log(imageUrl);
    var memeImage = $("<img>");

    memeImage.attr("src", imageUrl);
    memeImage.attr("alt", "meme image");
    
    $(".meme").append(memeImage);
})

