function opacity_1() {
const ul = document.getElementById("menu-content");
ul.style.opacity = "1"
ul.style.display = "block"
}

function opacity_0() {
const ul = document.getElementById("menu-content");
ul.style.opacity = "0"
ul.style.display = "none"
}

$(document).ready(function () {
    $("#menu_ic").click(function () { 
        $("#nav").toggleClass("clicked");
        $("#menu_ic").toggleClass("clicked");
    });
    $("#menu-content").slideUp();
    $("#show-menu").click(function () { 
        $("#menu-content").slideToggle();
    });
});
