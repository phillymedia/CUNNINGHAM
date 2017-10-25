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

  // $(".vid_img_gal .control").hover(
  //   function() {
  //     $(this).animate({
  //       width: "140px"
  //     }, 50, function() {
  //       $(this).find(".control-label").css("opacity", "1");
  //     })
  //   },
  //   function() {
  //     $(this).animate({
  //       width: "57px"
  //     }, 50, function() {
  //       $(this).find(".control-label").css("opacity", "0");
  //     })
  //   }
  // );






  // setTimeout(function() {
  //   var galleryids = [".451624583", ".451624583", ".451624583"];
  //   var youtube_id = ["TjtSiRJmfnM"]
  //   $(".v-carousel").each(function(index) {
  //     var galleryid = galleryids[index];
  //     var youtube_iframe = '<iframe class="yt-video" width="560" height="315" src="https://www.youtube.com/embed/' + youtube_id[index] + '?rel=0&amp;controls=0&amp;showinfo=0;enablejsapi=1" frameborder="0" allowfullscreen></iframe></div>';
  //     var itemCount = $(galleryid).find('.item').length;
  //     var youtube_indicator = '<li class="video_play" data-target="#carousel-one-generic" data-slide-to="0"><span class="glyphicon glyphicon-play">&nbsp;</span></li>'
  //     var video_slide = ("<div class='item item-video' alignment='true'>" + youtube_iframe + "</div>");
  //     $(galleryid).find(".carousel-inner").prepend(video_slide);
  //     $(galleryid).find(".carousel-thumbnail-container .carousel-indicators").prepend(youtube_indicator);
  //     var imgh = $(galleryid).find(".carousel-inner img").height();
  //     var imgw = $(galleryid).find(".carousel-inner img").width();
  //     $(galleryid).find('.yt-video').css({
  //       "height": imgh,
  //       "width": imgw
  //     });
  //     $(galleryid).find(".item").removeClass("active")
  //     $(".item-video").addClass("active");
  //     $(".item").each(function(index) {
  //       $(this).attr('data-slide-to', index);
  //     });
  //     $(".carousel-indicators li").each(function(index) {
  //       $(this).attr('data-slide-to', index);
  //     });
  //   });
  //
  //   $()
  // }, 3000);


});
