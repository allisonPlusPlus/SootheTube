function formSubmit() {
  $("form").submit(function(e) {
    e.preventDefault();
console.log("success");

});
}

$(function() {
  formSubmit();
});
