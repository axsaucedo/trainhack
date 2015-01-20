
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
  
  var VIDEO_ID = 'TmsozWDwz_A';

  player = new YT.Player('player', {
      height: window.screen.height*1.3,
      width: window.screen.width*2,
      playerVars: { 
          'autoplay': 1, 
          'controls': 0, 
          'loop': 1,
          'autohide':1,
          'wmode':'opaque', 
          'showinfo' : 0,
          'showsearch' : 0,
          'enablejsapi' : 1,
          'start': 40, 
          'end': 110,
          'vq': 'hd1080',
          'playlist': VIDEO_ID,
      },
      videoId: VIDEO_ID,
      events: {
          'onReady': onPlayerReady
      }
  });
}

function onPlayerReady(event) {
  $("#player").show();
  event.target.mute();
  $("#player").css("margin-left", -window.screen.width*.5);
}

$(function() {
    $('#typeform-full').attr("src", "https://axsauze.typeform.com/to/GFChYr");

    $('#typeform-full').on('load', function() {
        setTimeout(function() { $('#typeform-full').show() }, 5000);
    });
});