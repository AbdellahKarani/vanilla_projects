// ************* Set The Date *************
var date = document.querySelector(".data");
date.innerHTML = new Date().getFullYear();

// ************* Fixed NavBar && Fix Up Scroll *************
var header = document.querySelector("header");
var logo = document.querySelector(".logo");
var ul_links = document.querySelector("header ul.links");
var up = document.querySelector(".up");
window.onscroll = function() {
    if (window.scrollY > 200) {
        header.classList.add("setHeaderColor");
        logo.classList.add("setColorLogo");
        ul_links.classList.add("set-color");
    }
    else {
        header.classList.remove("setHeaderColor");
        ul_links.classList.remove("set-color");
        logo.classList.remove("setColorLogo");
    }
    // Start A Up Scroll
    if (window.scrollY > 400) {
        up.classList.add("show");
    }
    else {
        up.classList.remove("show");
    }
}
up.addEventListener("click", function() {
    scrollTo(0, -window.screen.height);
});


// ************* Set Nav Bar *************
var bar = document.querySelector("header .bars");
var ul_links = document.querySelector("header ul.links");
var links = document.querySelector("header .links-container");
bar.addEventListener("click", function() {
    const container_height = ul_links.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    console.log(container_height);
    console.log(linksHeight);
    if (linksHeight == 0) {
        links.style.height = `${container_height}px`;
        links.visibility = "visible";
        links.padding = "0 10px";
    } else {
        links.style.height = 0;
    }
    if (linksHeight == 0) {
        bar.className = "fa-solid fa-xmark bars";
        bar.style.color = "red";
    } else {
        bar.className = "fa-solid fa-bars bars";
        bar.style.color ="#102a42";
    }
    // links.classList.toggle("show_links");
});

// ************* Explore Scroll *************
var explore = document.querySelector("#explore");
explore.addEventListener("click", function(event) {
    event.preventDefault();
    scrollBy(0, window.screen.height * 3);
});

// ************* Loading The Page *************
document.addEventListener("DOMContentLoaded", function() {
    scrollTo(0, -window.screen.height * 3);
});

