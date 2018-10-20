/**
* @file
* JavaScript functions for the Space-Apps challenge 2018 - Rocket Launch Tracker
*/

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: "100%",
        height: "100%",
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

  /* // Update the controls on load
  updateTimerDisplay();
  updateProgressBar();

  // Clear any old interval.
  clearInterval(time_update_interval);

  // Start interval to update elapsed time display and
  // the elapsed part of the progress bar every second.
  time_update_interval = setInterval(function () {
      updateTimerDisplay();
      updateProgressBar();
  }, 1000) */

  event.target.setVolume(50);
  event.target.mute();
  event.target.playVideo();
}