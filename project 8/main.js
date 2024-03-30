
// const breakfast = document.querySelector(".breakfast");
// const lunch = document.querySelector(".lunch");
// const shakes = document.querySelector(".shakes");
// const dinner = document.querySelector(".dinner");
// const boxes = document.querySelectorAll(".box");

const all = document.querySelector(".all");
const foods = document.querySelectorAll(".food");
const boxes = document.querySelectorAll(".box");

foods.forEach(function(ele) {
    ele.addEventListener("click", function() {
        boxes.forEach(function(box) {
            box.style.visibility = "visible";
        });
        if (ele.className = "breakfast") {
            for (i = 7; i < boxes.length; i++) { boxes[i].style.visibility = "hidden"; }
        }
        if (ele.className = "lunch") {
            for (i = 2; i < boxes.length; i++) { boxes[i].style.visibility = "hidden"; }
        }
        if (ele.className = "shakes") {
            for (i = 5; i < boxes.length; i++) { boxes[i].style.visibility = "hidden"; }
        }
        if (ele.className = "dinner") {
            for (i = 3; i < boxes.length; i++) { boxes[i].style.visibility = "hidden"; }
        }
    })
})





