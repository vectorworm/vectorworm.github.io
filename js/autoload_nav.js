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

/* toggle between addign and removeing "responsive" class to nav when the user click menu*/
function toggle_menu(){
  var x = document.getElementById("nav");
  if (x.className === "navigation"){
    x.className += " responsive";
    document.getElementById("menu_button").src = "/img/menu_close.png";
  } else {
    x.className = "navigation";
    document.getElementById("menu_button").src = "/img/menu.png";
  }

}
