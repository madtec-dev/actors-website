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
  
  //Magnific popup
  $('.gallery').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  gallery: {
    enabled: true
  },
  type: 'image',
  callbacks: {
    beforeOpen: function() {
      imageSwipe();
      $("body").swipe("enable");
    },
    afterClose: function() {
      $("body").swipe("disable");
    }
  }
  // other options
  });
  function imageSwipe() {
    $("body").swipe( {
      //Generic swipe handler for all directions
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        console.log(direction);
        var magnificPopup = $.magnificPopup.instance;
        if(direction === 'left') magnificPopup.next(); 
        if(direction === 'right') magnificPopup.prev(); 
      }
    });
  }
});
