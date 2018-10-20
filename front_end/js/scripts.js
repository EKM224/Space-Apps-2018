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
            onReady: initialize
        }
    });
}

function initialize(event){

  event.target.setVolume(50);
  event.target.mute();
  event.target.playVideo();
}

function addRow(lauch) {
    var list = document.querySelector("ul");
    var li = document.createElement("li");
    // document.createElement("div");
    // div.innerText = lauch.rocketName;
    // document.createElement("div");
    li.innerHTML = 'content';
    list.appendChild(li);
}