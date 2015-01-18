
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
          'start': 20, 
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
  // event.target.mute();
  event.target.setVolume(20);
  $("#player").css("margin-left", -window.screen.width*.5);
}