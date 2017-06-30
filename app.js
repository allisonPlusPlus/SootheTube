'use strict'
var url = "https://www.googleapis.com/youtube/v3/search";



function getYouTube(query) {
    var data = {
        maxResults: '6',
        part: 'snippet',
        key: 'AIzaSyApCFcADbM3EgInOvuv2IevCLHYUDjaCfs',
        q: query,
    };
    $.getJSON(url, data, displayResults);
}

function displayResults(response) {

    function appendResults(item, i) {
        //Display thumbnail
        $(`#output${i+1}`).find("img").attr('src', item.snippet.thumbnails.medium.url);

        // //Make thumbnail link to video
        $(`#output${i+1}`).find('a').attr('href', watchUrl + item.id.videoId);
    }

    $(".searchresult").removeClass("hidden");
    //Display thumbnail
    var watchUrl = "https://www.youtube.com/watch?v=";


    // Mouse Hover Effect
    function hoverTitle(item, i) {
        $(`#output${i+1}`).mouseover(function() {
            $(`.title${i+1}`).html(response.items[i].snippet.title);
        });
        $(`#output${i+1}`).mouseout(function() {
            $("h2").empty();
        });
    }


    response.items.forEach(appendResults);
    response.items.forEach(hoverTitle);
    // for (let i=0; i < response.items.length; i++ ){
    //   console.log(response.items[i])
    //   $(`#output${i+1}`).find("img").attr('src', response.items[i].snippet.thumbnails.medium.url);
    //   $(`#output${i+1}`).find('a').attr('href', watchUrl + response.items[i].id.videoId);
    // }


}







function formSubmit() {
    $("form").submit(function(e) {
        e.preventDefault();
        var query = $("#searchterm").val();
        getYouTube(query);

    });
}

$(function() {
    formSubmit();
});
