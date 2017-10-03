$( document ).ready(function() {


// HAMBURGER MENU

$(".main-nav-menu-hamburger").on("click", function() {
    if ($(".main-nav-menu-hamburger-items").css("opacity") === "0") {
        $(".main-nav-menu-hamburger-items").css("display", "block");
        $(".main-nav-menu-hamburger-items").animate({opacity:1},600);
    } else {
        $(".main-nav-menu-hamburger-items").animate({opacity:0},600);
        $(".main-nav-menu-hamburger-items").css("display", "none");
    }



});











});
