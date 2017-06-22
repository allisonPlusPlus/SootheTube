
function getYouTube() {
  $.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/wgonb",
    dataType: "json",
    success: function(response) {
    console.log("success!");
  },

    error: function(xhr, status, e) { console.log(status, e); } });


}



function formSubmit() {
  $("form").submit(function(e) {
    e.preventDefault();

getYouTube()

});
}

$(function() {
  formSubmit();
});
