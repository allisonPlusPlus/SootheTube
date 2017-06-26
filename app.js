var url = "https://www.googleapis.com/youtube/v3/search";

function getYouTube(query) {
  var data = {
        maxResults: '7',
        part: 'snippet',
        key: 'AIzaSyApCFcADbM3EgInOvuv2IevCLHYUDjaCfs',
        q: query,
    };
    $.getJSON(url, data, displayResults);
}

function displayResults(response) {

$(".searchresult").removeClass("hidden");

//Display thumbnails
$("#output1").find("img").attr('src', response.items[0].snippet.thumbnails.medium.url);
$("#output2").find("img").attr('src', response.items[1].snippet.thumbnails.medium.url);
$("#output3").find("img").attr('src', response.items[2].snippet.thumbnails.medium.url);
$("#output4").find("img").attr('src', response.items[3].snippet.thumbnails.medium.url);
$("#output5").find("img").attr('src', response.items[4].snippet.thumbnails.medium.url);
$("#output6").find("img").attr('src', response.items[5].snippet.thumbnails.medium.url);

//Make thumbnails link to video
var watchUrl = "https://www.youtube.com/watch?v=";
$("#output1").find('a').attr('href', watchUrl + response.items[0].id.videoId);
$("#output2").find('a').attr('href', watchUrl + response.items[1].id.videoId);
$("#output3").find('a').attr('href', watchUrl + response.items[2].id.videoId);
$("#output4").find('a').attr('href', watchUrl + response.items[3].id.videoId);
$("#output5").find('a').attr('href', watchUrl + response.items[4].id.videoId);
$("#output6").find('a').attr('href', watchUrl + response.items[5].id.videoId);
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
