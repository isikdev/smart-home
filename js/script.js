$(document).ready(function() {
    $('#colorpicker').farbtastic('#color');
});
$("#settings").on("mouseenter", function(event) {
    $(".slideup__settings").toggleClass("slideup__settings-active");
});