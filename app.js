
function getYouTube(query) {
  $.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/wgonb",
    dataType: "json",
    success: function(response) {
    console.log(query);
  },

    error: function(xhr, status, e) { console.log(status, e); } });


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
