// ClipboardEvent
// oncopy
// oncut
// onpaste

const input = document.querySelector("input");
input.addEventListener("copy", function () {
    console.log("you have copy")
});

input.addEventListener("cut", function () {
    console.log("you have cut")
});
input.addEventListener("paste", function () {
    console.log("you have paste")
});

