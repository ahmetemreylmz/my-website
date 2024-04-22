const searchForm = document.querySelector(".search-form");
const navbar = document.querySelector(".navbar");

// buttons //
const searchBtn = document.querySelector("#search-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.toggle("active")
});

menuBtn.addEventListener("click", function(){
    navbar.classList.toggle("active");
    document.addEventListener("click", function(e) {
        if(
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
            ){
                navbar.classList.remove("active")
            }
    })
});
