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
        if (played = false){
          vid.currentTime = 0;
        }
      }
  })

  $("#replay").click(function() {
    vid.currentTime = 0;
    vid.play();
  });



});
