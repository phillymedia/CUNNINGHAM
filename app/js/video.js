$(document).ready(function() {
  var player = false;
  var vid = $("#fb_video")[0];
  $(window).on('scroll resize', function() {
    var window_top_position = $(window).scrollTop();
    var trigger = $("#fb_video").offset().top;
    // console.log(trigger - window_top_position);


    if (trigger <= window_top_position + 300 && player == false) {
      vid.play();
      player = true;
    } else {
      if (played = false) {
        vid.currentTime = 0;
      }
    }
  })

  $("#replay").click(function() {
    vid.currentTime = 0;
    vid.play();
  });

  // Find all YouTube videos
  var $allVideos = $("iframe[src^='//www.youtube.com']"),

    // The element that is fluid width
    $fluidEl = $("body");

  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {

    $(this)
      .data('aspectRatio', this.height / this.width)

      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');

  });

  // When the window is resized
  $(window).resize(function() {

    var newWidth = $fluidEl.width();

    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {

      var $el = $(this);
      $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));

    });

    // Kick off one resize to fix all videos on page load
  }).resize();

  $( ".vid_img_gal .play" ).hover(
    function() {
      $(this).animate({
        width: "140px"
      }, 50, function() {
        $(this).find(".play-label").css("opacity", "1");
      })
    }, function() {
      $(this).animate({
        width: "57px"
      }, 50, function() {
        $(this).find(".play-label").css("opacity", "0");
      })
    }
  );

  $(".vid_img_gal .play").click(function(){
    $(this).siblings('.videoWrapper').fadeIn();
    $(this).siblings('.videoWrapper').find('.yt-video')[0].src += "&autoplay=1";
  });

  // $(".vid_img_gal .play").hover(function() {
  //   $(this).animate({
  //     width: "140px"
  //   }, 50, function() {
  //     $(this).find(".play-label").css("opacity", "1");
  //   }, function() {
  //     $(this).animate({
  //       width: "57px"
  //     }, 50, function() {
  //       $(this).find(".play-label").css("opacity", "0");
  //     });
  //   });
  // });

});
