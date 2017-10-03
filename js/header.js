$( document ).ready(function() {


// CHANGING WORDS IN HEADER

var words = ["HELLO", "CZEŚĆ", "HOLA", "BONJOUR", "OLÁ", "ПРИВЕТ"];

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












});
