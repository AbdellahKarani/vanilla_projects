var header = document.querySelector("header");
var logo = document.querySelector(".logo");
var links = document.querySelectorAll("header ul li a");
window.onscroll = function() {
    if (window.scrollY > 200) {
        header.classList.add("scroll");
        logo.classList.add("scroll");
        links.forEach(function(ele) {
            ele.classList.add("scroll");
        });
    }
    else {
        header.classList.remove("scroll");
        logo.classList.remove("scroll");
        links.forEach(function(ele) {
            ele.classList.remove("scroll");
        });
    }
}

var explore = document.querySelector("#explore");
explore.addEventListener("click", function(event) {
    event.preventDefault();
    scrollBy(0, window.screen.height * 3);
});


document.addEventListener("DOMContentLoaded", function() {
    scrollTo(0, -window.screen.height * 3);
});





