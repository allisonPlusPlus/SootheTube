var url = "https://www.googleapis.com/youtube/v3/search";

function getYouTube(query) {
  var data = {
        part: 'snippet',
        key: 'AIzaSyApCFcADbM3EgInOvuv2IevCLHYUDjaCfs',
        q: query,
    };
    $.getJSON(url, data, callbackFn);
}

function callbackFn() {
  console.log("success");
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
