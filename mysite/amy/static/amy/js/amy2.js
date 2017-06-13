//Well done if you've followed the paper trail here...
//This is to hide from eyes other than amy's on Valentines Day!

var track = [0,0,0,0,0,0,0,0,0,0];
var konami = [38,38,40,40,37,39,37,39,66,65];

document.onkeydown = function(evt) {
  evt = evt || window.event;
  if ($.inArray(evt.keyCode), konami) {
    track.shift();
    track.push(evt.keyCode);
    codeCheck();
  }
};

$(document).ready(function() {
  // loadSlides();
});

/* ------------------------Slideshow Functionality ----------------------------------*/

function beginSlides() {
  $('#picture_frame').css('display','block').css('opacity',1);
  $('#vid_frame').delay(200).animate({'opacity':0},2000,function(){$(this).css('display','none');});
  $('#messageFrame').delay(200).animate({'opacity':0},2000,function(){$(this).css('display','none');});
};

function returnToMessage() {
  $('#picture_frame').delay(200).animate({'opacity':0},2000,function(){$(this).css('display','none');});
  $('#vid_frame').delay(200).css('display','block').animate({'opacity':1},2000);
  $('#messageFrame').delay(200).css('display','block').animate({'opacity':1},2000);
}


/* ---------------------KEYPRESS FUNCTION EVENT FOR KONAMI -----------------------------------*/
function codeCheck() {
  var keyd = true;
  for (var i=0; i < 10; i++) {
      if (track[i] != konami[i])
          keyd = false;
  };
    if (keyd) {
      // alert("test");
      talkToAmy();
    }
};

// /* --------------------- Functions to control Video Content -------------------------- */
//
function playAudioVideo() {
    //VIDEO
    // var vid = $("video");
    var vid = $("#bgvid");
    vid[0].playbackRate = 1;
    vid[0].play();

    //AUDIO
    var aud = $("#bgaud");
    aud[0].volume = 0.5;
    aud[0].play();
};
//
// /*----------------------------- Special Functions ---------------------------------------*/
function talkToAmy() {

    $('.msg-para').html(''+
    "Hey Amy!<br />"+
    "&nbsp")

    $('#load_frame').delay(1000).animate({'opacity':0},2000,function(){$(this).css('display','none');});
    playAudioVideo();
  };
