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
  console.log("success");
  console.log(response)
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
