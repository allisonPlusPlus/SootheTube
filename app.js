
function getYouTube() {
  console.log("success");
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
