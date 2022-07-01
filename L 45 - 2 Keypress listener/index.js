/*
document.addEventListener("keypress", function (event) {
    var text = event.key;
    document.querySelector("p").innerHTML = "You Have Pressed : " + text;


})*/

var count = 0

document.querySelector("#textArea").addEventListener("keypress", function (event) {
    count++;
    var text = event.key;
    document.querySelector("p").innerHTML = "You Have Pressed : " + count;


});
