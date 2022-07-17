// KeyboardEvent Object
// 1. Keydown - pressing a key, can repeat
// 2. keypresss ( may not supported by some browser)
// 3. keyup
// some properties - key, keyCode, code, shiftKey ctlKey, repeat

const textA = document.querySelector("textarea");
//textA.addEventListener("keydown", function () {
//   console.log("key Down")
//})

//textA.addEventListener("keypress", function () {
//    console.log("key Press")
//})

textA.addEventListener("keyup", function (e) {
    if (e.shiftKey) {
        console.log("shift+" + e.key)
    }

})