const squish_sound = new Audio("/audio/watermelon squish.wav");
squish_sound.volume = 0.5;

$(function(){
  $("#nav").load("/html/nav.html");
});

function deflateLogo(){
  document.getElementById("logo").src = "/img/vectorworm-deflate.gif";
  squish_sound.play();
}
function inflateLogo(){
  document.getElementById("logo").src = "/img/vectorworm-inflate.gif";
  squish_sound.play();
}
