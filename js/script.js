$( document ).ready(function() {


// CHANGING WORDS IN HEADER

var words = ["HELLO", "CZEŚĆ", "HOLA", "BONJOUR", "OLA", "ПРИВЕТ"];

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
    console.log("do animowania:", hello)
    animateWord(hello);
    return hello.innerText;
}

function animateWord(word) {
    var hello = word;
    var theWidth = "400px"; // theWidth jest na sztywno, a chyba powinno się dopasowywać
    console.log(hello, "width:", theWidth);
    $(hello).css("overflow", "hidden");
    $(hello).css("width", "0");
    return $(hello).animate( { width: theWidth }, 2000 );
}

$(window).bind("load", function() {
    setInterval(function() {
        changeWord(words);
    }, 3500);
});













});
