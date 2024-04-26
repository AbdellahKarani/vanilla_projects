let links_container = document.querySelector(".links-container");
let links = document.querySelector(".links");
let liLinks = document.querySelectorAll(".links li");
let navIcon = document.querySelector(".navIcon");

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


// Set Date For Giveaway
let months = ["January", "February", "March", "April", "May", "Jun",
"Juliet", "August", "September", "October", "December"];
let days = ["Monday", "Thursday", "Wednesday", "Tuesday",
"Friday", "Sunday", "Saturday"];
let end_giv = document.querySelector(".end_giv");
// Format : Tuesday, 30 April 2024 11:30am
let future_date = new Date(2026, 7, 17, 21, 29);
const year = future_date.getFullYear();
const hours = future_date.getHours();
const minutes = future_date.getMinutes();
const month_name = months[future_date.getMonth() - 1];
const day_name = days[future_date.getDay()];

end_giv.textContent = `${day_name}, ${future_date.getMonth()} \
${month_name} ${year} ${hours}:${minutes}am`;



// Start Count Down
function getRemainingDay() {
    const current_date_mil = new Date().getTime();
    const future_date_mil = future_date.getTime();
    const oneDay = 24 * 3600 * 1000;
    const oneHour = 3600 * 100;
    const oneMinute = 60 * 1000;
    // Calculate All Values
    const t = (future_date_mil - current_date_mil)
    const days = Math.floor((t / oneDay));
    const hours = Math.floor((t % oneDay) / oneHour);
    const minutes = Math.floor(((t % oneDay) % oneHour) / oneMinute);
    const seconds = Math.floor(((t % oneDay) % oneHour) / 1000);
    console.log(days, hours, minutes, seconds);
}
getRemainingDay();

const day_ele = document.querySelector(".day span");
const hour_ele = document.querySelector(".hour span");
const min_ele = document.querySelector(".min span");
const sec_ele = document.querySelector(".sec span");

day_ele.textContent = future_date.getDay();
hour_ele.textContent = future_date.getHours();
min_ele.textContent = future_date.getMinutes();
sec_ele.textContent = future_date.getSeconds();


// setInterval(() => {
//     sec.textContent = Number(sec.textContent) + 1;
//     if (sec.textContent == 60) {
//         min.textContent = Number(min.textContent) + 1;
//         sec.textContent = 0;
//         if (min.textContent == 60) {
//             hour.textContent = Number(hour.textContent) + 1;
//             min.textContent = 0;
//             if (hour.textContent == 24) {
//                 hour.textContent = 0;
//                 day.textContent = Number(day.textContent) + 1;
//             }
//         }
//     }
// }, 1000);




















/* Update Footer */
let footer_copyright = document.querySelector("footer .date");
footer_copyright.textContent = new Date().getFullYear();





