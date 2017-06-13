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
  loadSlides();
});

/* ------------------------Slideshow Functionality ----------------------------------*/


//TODO: THIS WILL NOT WORK SO DON'T BOTHER MATT HAHA - NEED TO BE RUNNING A SEVER............
function loadSlides() {
  var loc = window.location.pathname;
  var dir = loc.substring(0, loc.lastIndexOf('/'));
  var folder = "file://" + dir + "/";

  $.ajax({
    url : folder,
    success: function (data) {
      alert("test");
      $(data).find("a").attr("href", function (i, val) {
        if( val.match(/\.(jpe?g|png|gif)$/) ) {
          $("body").append( "<img src='"+ folder + val +"'>" );
          alert(val);
        }
      });
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // jqXHR Codes defined at https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
      alert("FAILED:\t"+jqXHR.status+"\nStatus:\t" + textStatus + "\n\nError Thrown:\t" + errorThrown);
    }
  });

};

function beginSlides() {

};


// /* ---------------------KEYPRESS FUNCTION EVENT FOR KONAMI -----------------------------------*/
// function codeCheck() {
//   var keyd = true;
//   for (var i=0; i < 10; i++) {
//       if (track[i] != konami[i])
//           keyd = false;
//   };
//     if (keyd) {
//       alert("test");
//       // talkToAmy();
//     }
// };
//
// /* --------------------- Functions to control Video Content -------------------------- */
//
// function playAudioVideo() {
//     //VIDEO
//     // var vid = $("video");
//     var vid = $("#bgvid");
//     vid[0].playbackRate = 1;
//     vid[0].play();
//
//     //AUDIO
//     var aud = $("#bgaud");
//     aud[0].volume = 0.5;
//     aud[0].play();
// };
//
// /*----------------------------- Special Functions ---------------------------------------*/
// function talkToAmy() {
//
//     $('.msg-para').html(''+
//     "Hey Amy!<br />"+
//     "&nbsp")
//
//     $('#load_frame').delay(1000).animate({'opacity':0},2000,function(){$(this).css('display','none');});
//     playAudioVideo();
//   }
// };
