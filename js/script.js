$(document).ready(function() {
    $('#colorpicker').farbtastic('#color');
});
$("#settings").on("click", function(event) {
    $(".slideup__settings").toggleClass("slideup__settings-active");
});