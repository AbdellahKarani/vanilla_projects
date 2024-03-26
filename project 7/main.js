// var btn_s = document.querySelectorAll(".showPlus");
// var question = document.querySelector(".question");
// var icon = document.querySelector(".icon");
// btn_s.forEach(element => {
//     element.addEventListener("click", function(event) {
//         element.parentElement.parentElement.classList.toggle("show-text");
//         event.currentTarget.firstElementChild.classList.toggle("minus");
//     });
// });

// Traversing The DOM
var qs = document.querySelectorAll(".question");
qs.forEach(function(question) {
    const btn = question.querySelector(".showPlus");
    btn.addEventListener("click" , function() {
        btn.firstElementChild.classList.toggle("minus");
        qs.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});





