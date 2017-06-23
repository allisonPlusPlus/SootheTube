var url = "https://www.googleapis.com/youtube/v3/search";

function getYouTube(query) {
  var data = {
        part: 'snippet',
        key: 'AIzaSyApCFcADbM3EgInOvuv2IevCLHYUDjaCfs',
        q: query,
    };
    $.getJSON(url, data, displayResults);
}

function displayResults(response) {
   var items = response.items;
   for (var i = 0; i < items.length; i++) {
     console.log(items[i].snippet.thumbnails.medium.url);
   }
  console.log(response.items[1].snippet.thumbnails.medium.url);
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
