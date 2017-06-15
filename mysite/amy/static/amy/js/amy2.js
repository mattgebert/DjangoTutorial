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
  // talkToAmy();
  // beginSlides();
  // loadSlides();
});

/* ------------------------Slideshow Functionality ----------------------------------*/

var viewportWidth = window.innerWidth;//$(document).width();
var viewportHeight = window.innerHeight;//$(document).height();

// var db_img_count = 4;

var animationTurn = 0;
function animateImg(im) {
  var localAnimation = animationTurn; //Copy local animation.

  animationTurn = animationTurn + 1;
  if (animationTurn > 7) {
    animationTurn = 0;
  };

  // alert("animating image...");
  //Get img width and height.
  var imgWidth = parseInt(im.css("width"));//width();
  var imgHeight = parseInt(im.css("height"));//height();
  // //Apply local animation.
  var set = animationSet[localAnimation];
  im.css('left',""+(set["xi"] + imgWidth*set["xii"])+"px") //Position
    .css('top',""+(set["yi"] + imgHeight*set["yii"])+"px")
    .css('display','block') //Show image
    .animate({ //Animate image.
      'left':""+(set['xf'] + imgWidth*set["xfi"])+"px",
      'top':""+(set['yf'] + imgHeight*set["yfi"])+"px"
    }, set['duration']
    , "linear"
    , function(){
      animateNext();
    });
};

var runSlides = false;
var picNum = 1;
// REQUIRES db_img_count to be defined in HTML file by Django
function animateNext() {
  // alert("animating next!");
  if (picNum > db_img_count) {
    picNum = 1;
  };
  if(runSlides) {
    animateImg($("#db_img" + picNum));
    picNum = picNum + 1;
  }
};

// REQUIRES db_img_count to be defined in HTML file by Django
var imagesNotScaled = true;
function animateSlides() {
  var i = 0;
  //make all images an appropriate size
  if (imagesNotScaled) {
    for (i=0; i< db_img_count; i++) {
      var im = $("#db_img" + i);
      var imgWidth = parseInt(im.css("width"));//width();
      var imgHeight = parseInt(im.css("height"));//height();

      var greaterWidth = imgWidth * 3/2 /viewportWidth;

      if(greaterWidth > 1) {
        //Scale Width and Height
        im.css("width", imgWidth/greaterWidth);
        im.css("height", imgHeight/greaterWidth);
        //Update width and height
        imgWidth = parseInt(im.css("width"));//width();
        imgHeight = parseInt(im.css("height"));//height();
      };
      var greaterHeight = imgHeight * 3/2 / viewportHeight;
      if(imgHeight > 1) {
        //Scale Width and Height
        im.css("width", imgWidth/greaterHeight);
        im.css("height", imgHeight/greaterHeight);
      }
    }
    imagesNotScaled = false;
  }
  // initialise animation of slides
  for (i=0; i<3; i++) { // i<X --> X Determines how many slides run at once.
    animateNext();
  };
};


function beginSlides() {
  $('#picture_frame').css('display','block').css('opacity',1);
  $('#vid_frame').delay(200).animate({'opacity':0},2000,function(){$(this).css('display','none');});
  $('#messageFrame').delay(200).animate({'opacity':0},2000,function(){$(this).css('display','none');});
  runSlides = true;
  animateSlides();
};

function returnToMessage() {
  $('#picture_frame').delay(200).animate({'opacity':0},2000,function(){$(this).css('display','none');});
  $('#vid_frame').delay(200).css('display','block').animate({'opacity':1},2000);
  $('#messageFrame').delay(200).css('display','block').animate({'opacity':1},2000);
  runSlides = false;
};


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


/* ---------------------------------- ANIMATION SET DEFINED ---------------------------------*/
var animationSet = {
  0:{ //Top left to bottom right
    'duration':10000,
    'xi':0,'yi':0,
    'xf':viewportWidth,
    'yf':viewportHeight,
    'xii':-1,'xfi':0,
    'yii':-1,'yfi':0,
    },
  7:{ //Top right to bottom left
    'duration':7000,
    'xi':viewportWidth,
    'yi':0,
    'xf':0,
    'yf':viewportHeight,
    'xii':0,'xfi':-1,
    'yii':-1,'yfi':0,
  },
  2:{ //Bottom right to top left
    'duration':8000,
    'xi':viewportWidth,
    'yi':viewportHeight,
    'xf':0,
    'yf':0,
    'xii':0,'xfi':-1,
    'yii':0,'yfi':-1,
    },
  4:{ //Bottom left to top right
    'duration':5000,
    'xi':0,
    'yi':viewportHeight,
    'xf':viewportWidth,
    'yf':0,
    'xii':-1,'xfi':0,
    'yii':0,'yfi':-1,
    },
  3:{ //Middle Lower, Left to right
    'duration':8000,
    'xi':0,
    'yi':viewportHeight*3/4,
    'xf':viewportWidth,
    'yf':viewportHeight*3/4,
    'xii':-1,'xfi':0,
    'yii':-0.5,'yfi':-0.5
    },
  6:{ //Middle Left, Top to Bottom
    'duration':9000,
    'xi':viewportWidth*1/4,
    'yi':0,
    'xf':viewportWidth*1/4,
    'yf':viewportHeight,
    'xii':-0.5,'xfi':-0.5,
    'yii':-1,'yfi':0
    },
  5:{ //Middle Top, Right to left
    'duration':8000,
    'xi':viewportWidth,
    'yi':viewportHeight*1/4,
    'xf':0,
    'yf':viewportHeight*1/4,
    'xii':0,'xfi':-1,
    'yii':-0.5,'yfi':-0.5
    },
  1:{ //Middle Right, Bottom to Top
    'duration':4000,
    'xi':viewportWidth*3/4,
    'yi':viewportHeight,
    'xf':viewportWidth*3/4,
    'yf':0,
    'xii':-0.5,'xfi':-0.5,
    'yii':0,'yfi':-1
    },
};
