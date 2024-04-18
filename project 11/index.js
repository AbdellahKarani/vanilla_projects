// Get All Menu Element
var ele_menu = document.querySelectorAll(".menu li");
var articles = document.querySelectorAll("article");
ele_menu.forEach(function(ele) {
    ele.addEventListener("click", function() {
        ele_menu.forEach(e => e.classList.remove("active"));
        articles.forEach(e => e.classList.remove("active"));
        const article = document.querySelector(`article.${ele.className}`);
        article.classList.add("active");
        ele.classList.add("active");
    });
});

