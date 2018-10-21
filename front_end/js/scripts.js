/**
* @file
* JavaScript functions for the Space-Apps challenge 2018 - Rocket Launch Tracker
*/

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        videoId: 'sB_nEtZxPog',
        playerVars: {
            playlist: 'sB_nEtZxPog',
            autoplay: 1,
            color: 'white',
            controls: 0,
            showinfo: 0,
            autohide: 1,
            modestbranding: 1,
            disablekb: 1,
            enablejsapi: 1,
            loop: 1,
        },
        events: {
            onReady: initialize,
            onload : other
        }
    });

}

function initialize(event){

  event.target.setVolume(50);
  event.target.mute();
  event.target.playVideo();

}

//this does not function right now for some reason, the onload function that works is found in view,
// as an immediate init after object decleration
function onLoad(event) {
    VideoView.hook = document.querySelector("#video-placeholder");
    console.log("============================")
    console.log(VideoView);
}