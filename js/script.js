$(document).ready(function() {
    $('#colorpicker').farbtastic('#color');
});
$("#settings").on("mouseenter mouseleave", function(event) {
    $(".slideup__settings").toggleClass("slideup__settings-active");
});