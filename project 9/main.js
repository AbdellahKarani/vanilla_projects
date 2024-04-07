var play_pause = document.querySelector(".play-pause");
var pause = document.querySelector(".pause");
var play = document.querySelector(".play");
var myVideo = document.querySelector(".travel") 

pause.addEventListener("click", function() {
    play_pause.classList.add("play");
    myVideo.autoplay = false;
});
play.addEventListener("click", function() {
    play_pause.classList.remove("play");
    myVideo.autoplay = true;
});





