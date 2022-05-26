////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////// AMBIANCE

// global variable for the player
var player;

// Inject YouTube API script
var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player("video", {
    events: {
      // call this function when player is ready to use
      // onReady: onPlayerReady,
    },
  });
}

// function onPlayerReady() {
//   // bind events
//   var playButton = document.getElementById("shit");
//   playButton.addEventListener("click", function () {
//     player.playVideo();
//   });
// }

function startVideo() {
  player.playVideo();
  hideSoundButton("startButton", "stopButton");
}

function stopVideo() {
  player.stopVideo();
  hideSoundButton("stopButton", "startButton");
}

// hiding buttons when inactive
function hideSoundButton(toHide, toShow) {
  // hide stop button
  var hideButton = document.getElementById(toHide);
  var hideButtonList = hideButton.classList;
  hideButtonList.add("unavailable");
  // show play button
  var showButton = document.getElementById(toShow);
  var showButtonList = showButton.classList;
  showButtonList.remove("unavailable");
}
