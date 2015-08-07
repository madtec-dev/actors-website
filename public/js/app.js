$(window).scroll(function() {
    if ($("#navigation").offset().top > 50) {
        $("#navigation").addClass("top-nav-collapse");
    } else {
        $("#navigation").removeClass("top-nav-collapse");
    }
});
