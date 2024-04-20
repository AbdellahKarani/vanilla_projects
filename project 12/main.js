var links_container = document.querySelector(".links-container");
var links = document.querySelector(".links");
var liLinks = document.querySelectorAll(".links li");
var navIcon = document.querySelector(".navIcon");

// Hide The Nav bar If Click Tp Link
liLinks.forEach(function(ele) {
    ele.addEventListener("click", function() {
        links_container.classList.remove("down");
        links.classList.remove("down");
        links_container.style.height = 0;
        navIcon.className = "fas fa-bars navIcon";
        navIcon.style.color = "black";
    });
});

navIcon.addEventListener("click", function() {
    // Set The Height + Add down Class
    links_container.classList.toggle("down");
    links.classList.toggle("down");
    const heightCont = links_container.getBoundingClientRect().height;
    const heightLinks = links.getBoundingClientRect().height;
    if (heightCont == 0) {
        links_container.style.height = `${heightLinks}px`;
        navIcon.className = "fa-solid fa-xmark navIcon";
        navIcon.style.color = "red";
    } else {
        links_container.style.height = 0;
        navIcon.className = "fas fa-bars navIcon";
        navIcon.style.color = "black";
    }
    // Change The Icon
});

