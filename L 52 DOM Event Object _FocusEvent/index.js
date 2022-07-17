// FocusEvent Object
// <br>, <head>, <title> <html> <iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo>

// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout

const input = document.querySelector("input");
input.addEventListener("blur", function () {
    console.log("blur is occured")
});

input.addEventListener("focus", function () {
    console.log("focus is occured")
    input.style.backgroundColor = "orange"
})

input.addEventListener("focusin", function () {
    console.log("focusin is occured")

});

input.addEventListener("focusout", function () {
    console.log("focusout is occured")
    input.style.backgroundColor = "#fff"
})
