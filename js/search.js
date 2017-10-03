$( document ).ready(function() {

var buttons = $(".countries").children("button");

$(buttons).on("click", function(event) {
    // kliknięcie na jakikolwiek button zdejmuje select z All, jeśli był zaznaczony, i chowa wszystkie blogi:
    if ($("#All").hasClass("sbtn-selected")) {
        $("#All").removeClass("sbtn-selected");
        $(".blogs").children(".blog").css("display", "none");
    }

    // zaznaczam ten button
    $(this).toggleClass("sbtn-selected");
    // pobieram id tego buttona
    var myId = $(this).attr("id");

    // wyszukuję wszystkie blogi
    var blogs = $(".blogs").children(".blog");
    // wyszukaj te blogi z data-country takim jak id wyżej, i daję im display block (innym - none)
    $(blogs).each(function(i,e) {
        if ($(e).data("country") == myId && $(e).css("display") == "none") {
            $(e).css("display", "block");
        } else if ($(e).data("country") == myId && $(e).css("display") == "block") {
            $(e).css("display", "none");
        }
    })
})

// Dla diva All:
$("#All").on("click", function(event) {
    // kliknięcie na All zdejmuje select z innych buttonów
    $(buttons).removeClass("sbtn-selected");
    $(this).toggleClass("sbtn-selected");
    // jeśli nie ma klasy - daj display none
    if ($(this).hasClass("sbtn-selected") == false) {
        var blogs = $(".blogs").children(".blog");
        $(blogs).css("display", "none")
    } else if ($(this).hasClass("sbtn-selected") == true) {
        var blogs = $(".blogs").children(".blog");
        $(blogs).css("display", "block")
    }
})



// Jak zrobić, że by na pierwsze kliknięcie jakiegokolwiek buttona znikały te z innymi kategoriami (ale tylko dla pierwszego kliknięcia!)?







});
