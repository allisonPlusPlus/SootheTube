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
//Display thumbnails
$("#output1").find("img").attr('src', response.items[0].snippet.thumbnails.medium.url);
$("#output2").find("img").attr('src', response.items[1].snippet.thumbnails.medium.url);
$("#output3").find("img").attr('src', response.items[2].snippet.thumbnails.medium.url);
$("#output4").find("img").attr('src', response.items[3].snippet.thumbnails.medium.url);
$("#output5").find("img").attr('src', response.items[4].snippet.thumbnails.medium.url);
$("#output6").find("img").attr('src', response.items[5].snippet.thumbnails.medium.url);

//Make thumbnails link to video
var watchUrl = "https://www.youtube.com/watch?v=" + response.items[1].id.videoId;
$("#output1").find('a').attr('href', watchUrl);
console.log(response.items[1].id.videoId)

  console.log(response.items[0].snippet.thumbnails.medium.url);

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
