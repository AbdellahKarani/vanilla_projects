var plus_moin = document.querySelectorAll(".plus");
var content = document.querySelector(".hidden");
var i = 0;
[...plus_moin].forEach(element => {
    element.addEventListener("click", function() {
        if (element.classList.contains("fa-minus")) {
            element.className = "fa-sharp fa-solid fa-plus";
        } else {
            element.className = "fa-sharp fa-solid fa-minus";
        }
        element.parentElement.parentElement.nextElementSibling.classList.toggle("hidden");
    });
});









