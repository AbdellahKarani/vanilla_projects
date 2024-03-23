var btn_s = document.querySelectorAll(".showPlus");
var question = document.querySelector(".question");
btn_s.forEach(element => {
    element.addEventListener("click", function(event) {
        if (element.children[0].classList.contains("fa-minus")) {
            element.children[0].className = 'fa-sharp fa-solid fa-plus';
        } else {
            element.children[0].className = 'fa-sharp fa-solid fa-minus';
        }
        element.parentElement.parentElement.classList.toggle("show-text");
    });
});









