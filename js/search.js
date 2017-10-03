$( document ).ready(function() {




var buttons = $(".countries").children("button");

// console.log(buttons)

$(buttons).on("click", function(event) {
    $(this).toggleClass("sbtn-selected");

    // pobierz id tego buttona
    var myId = $(this).attr("id");
    console.log(myId) // OK

    // wyszukaj wszystkie blogi:
    var blogs = $(".blogs").children(".blog");
    console.log(blogs)

    // wyszukaj te blogi z data-country takim jak id powyżej (?)


    // var myBlogs = $('div[data-country="$(myId)"]')
    // console.log(myBlogs.data("country"));

    // toggle mu klasę .blog-hidden


})



// Jak zrobić, że by na pierwsze kliknięcie jakiegokolwiek buttona znikały te z innymi kategoriami (ale tylko dla pierwszego kliknięcia!)?







});
