$( document ).ready(function() {


// CHANGING HELLO WORDS IN HEADER

var words = ["HELLO", "CZEŚĆ", "HOLA", "BONJOUR", "BUNA", "OLÁ", "ПРИВЕТ"];

function changeWord(arr) {
    for (var i=0; i<arr.length; i++) {
        var hello = document.querySelector("#hello");
        var newWord;
        if (hello.innerText === arr[i] && i<arr.length-1) {
            newWord = arr[i+1];
            break;
        } else if (hello.innerText === arr[i] && i === arr.length-1) {
            newWord = arr[0];
        }
    }
    hello.innerText = newWord;
    // console.log("do animowania:", hello)
    animateWord(hello);
    return hello.innerText;
}

function animateWord(word) {
    var hello = word;
    var theWidth = "100%"; // było na sztywno 400px, zmieniłam na %
    // console.log(hello, "width:", theWidth);
    $(hello).css("overflow", "hidden");
    $(hello).css("width", "0");
    return $(hello).animate( { width: theWidth }, 800 );
}

$(window).bind("load", function() {
    setInterval(function() {
        changeWord(words);
    }, 3500);
});

// CHANGING COUNTRY NAMES IN HEADER

var countries = ["POLAND", "POLSKO", "POLONIA", "POLOGNE", "POLONIA!", "POLÔNIA", "ПОЛЬША"];

function changeCountry(arr) {
    for (var i=0; i<arr.length; i++) {
        var poland = document.querySelector("#poland");
        var newCountry;
        if (poland.innerText === arr[i] && i<arr.length-1) {
            newCountry = arr[i+1];
            break;
        } else if (poland.innerText === arr[i] && i === arr.length-1) {
            newCountry = arr[0];
        }
    }
    poland.innerText = newCountry;
    // console.log("do animowania:", hello)
    animateCountry(poland);
    return poland.innerText;
}

function animateCountry(country) {
    var poland = country;
    var theWidth = "100%";
    $(poland).css("overflow", "hidden");
    $(poland).css("width", "0");
    return $(poland).animate( { width: theWidth }, 800 );
}

$(window).bind("load", function() {
    setInterval(function() {
        changeCountry(countries);
    }, 3500);
});


// SCROLLING

$("#arrow-down").on("click", function(event) {
    // document.querySelector('#about').scrollIntoView({
    // 	behavior: 'smooth'
    // });
    window.scrollBy({
        top: 800,
        left: 0,
        behavior: 'smooth'
});
})








});
