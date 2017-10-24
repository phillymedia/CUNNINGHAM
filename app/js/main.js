require("./video");
$(document).ready(function(){

  $(window).on('ready resize', function() {
      var rowwidth = $(".col").outerWidth();
      var outercolwidth = $(".container").outerWidth();
      var windowwidth = $(window).width();
      var colleftbuffer = $('.col-md-6').offset().left + $(".col-md-6").outerWidth();
      var colleft = $(".col-md-6").outerWidth();

      if ($(window).width() >= 992) {
          $(".fixedside")
              .css('left', colleft + "px")
              .css('width', $(window).width() - colleftbuffer - 20 + "px")
              .css('margin-right', '');


      } else if ($(window).width() < 992 && $(window).width() >= 768) {
          $(".fixedside")
              .css('left', "")
              .css('width', colleft * .50 + $('.col-md-6').offset().left + "px")
              .css('margin-right', '-' + ($('.col-md-6').offset().left - 10) + "px");

      } else if ($(window).width() < 768) {
          $(".fixedside")
              .css('left', "")
              .css('width', "")
              .css('margin-right', '');
      }



  })


});
