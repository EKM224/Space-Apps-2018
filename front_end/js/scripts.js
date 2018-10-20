/**
* @file
* JavaScript functions for the Space-Apps challenge 2018 - Rocket Launch Tracker
*/

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        frameborder: "0",
        videoId: 'sB_nEtZxPog',
        playerVars: {
            autoplay: 1,
            color: 'white',
            controls: 0,
            showinfo: 0,
            autohide: 1,
            modestbranding: 1,
            disablekb: 1,
            enablejsapi: 1,
        },
        events: {
            onReady: initialize
        }
    });
}

function initialize(event){

  event.target.setVolume(50);
  event.target.mute();
  event.target.playVideo();
}