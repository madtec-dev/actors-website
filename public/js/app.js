$(window).scroll(function() {
    if ($("#navigation").offset().top > 50) {
        $("#navigation").addClass("top-nav-collapse");
    } else {
        $("#navigation").removeClass("top-nav-collapse");
    }
});

$('.spin-icon').click(function () {
    $(".theme-config-box").toggleClass("show");
});

$(document).ready(function () {
  // Append config box / Only for demo purpose
  $.get("views/skin-config.html", function (data) {
      $('body').append(data);
  });
});
