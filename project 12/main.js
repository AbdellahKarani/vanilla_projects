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
});

// Start Count Down
const day = document.querySelector(".day span");
const hour = document.querySelector(".hour span");
const min = document.querySelector(".min span");
const sec = document.querySelector(".sec span");

setInterval(() => {
    sec.textContent = Number(sec.textContent) + 1;
    if (sec.textContent == 60) {
        min.textContent = Number(min.textContent) + 1;
        sec.textContent = 0;
        if (min.textContent == 60) {
            hour.textContent = Number(hour.textContent) + 1;
            min.textContent = 0;
            if (hour.textContent == 24) {
                hour.textContent = 0;
                day.textContent = Number(day.textContent) + 1;
            }
        }
    }
}, 1000);


// The GiveWay Date
var end_giv = document.querySelector(".end_giv");
// end_giv.textContent = 
console.log(new Date().getTime());
console.log(new Date().getMonth());
console.log(new Date().getDate());


// Update Footer
var footer_copyright = document.querySelector("footer .date");
footer_copyright.textContent = new Date().getFullYear();
