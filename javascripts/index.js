/*
  Plays track.

  Arguments: track (audio element)
*/
function play(track) {
  track.play();
}

/*
  Pauses the track.

  Arguments: track (audio element)
*/
function pause(track) {
  track.pause();
}

/*
  Gets the percent of music played so far.

  Arguments: track (audio element)
  Returns: Percent (float)
*/
function getPercentPlayed(track) {
  /* YOUR CODE HERE */
}

/*
  Gets the timestring of music played so far.

  Arguments: track (audio element)
  Returns: Time (String)
*/
function getTimePlayed(track) {
  /* YOUR CODE HERE */
}


/*
  Gets the timestring of music left to play.

  Arguments: track (audio element)
  Returns: Time (String)
*/
function getTimeLeft(track) {
  /* YOUR CODE HERE */
}

/*
  Function helper that turns time (in seconds) into a human readable string.

  Arguments: Seconds (float)
  Returns: Human readable string (string).

  Ex: getTimeString(601) => "10:01"
*/
function getTimeString(time) {
  time = parseInt(time);
  var seconds = time % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var minutes = parseInt(time / 60);
  return minutes + ":" + seconds;
}

/*
  Function that is called every second.
  Do your music updating here!
*/
function updateTime(track, timer) {
   /* YOUR CODE HERE */

  if ($(".time-current").html() == getTimeString(parseInt(track.duration))) {
    resetPlayer(track, timer);
  }
}

/*
  Resets the player.
*/
function resetPlayer(track, timer) {
  /* YOUR CODE HERE */
}

function onLoad() {
  var track = document.getElementById("track");
  var timer;
  track.volume = 0.1;

  $(track).on('loadedmetadata', function() {
    /* YOUR CODE HERE */

    $(".play").click(function() {
      if($(this).hasClass("active")) {
        /* YOUR CODE HERE */
        clearInterval(timer);
      } else {
        /* YOUR CODE HERE */
        timer = setInterval(function() { updateTime(track, timer); }, 1000);
      }
    });

    $(".time-left").text(getTimeString(parseInt(track.duration)));
  });
}

$(document).ready(function() { onLoad() });
