// MousEvent - <html>, <head>,
//<title>, <base>, <bdo>
// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmousedup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover

const mouse = document.querySelector(".mouse-evt");

mouse.addEventListener("click", function (e) {
    //console.log("click");
    // console.log(e.target.className)
    console.log(e.target.textContent)
})

mouse.addEventListener("dblclick", function () {
    console.log("2x click");
})

mouse.addEventListener("mousedown", function () {
    console.log("mousedown");
})

mouse.addEventListener("mouseup", function () {
    console.log("mouse up");
})

mouse.addEventListener("mouseenter", function () {
    console.log("Mouse Enter");
})

mouse.addEventListener("mouseleave", function () {
    console.log("Mouse Leave");
})

//mouse.addEventListener("mousemove", function (e) {
// console.log("Mouse Move");
//   console.log("clientX = " + e.clientX + ", clientY = " + e.clientY);
//})

mouse.addEventListener("mousemove", function (e) {
    // console.log("Mouse Move");
    console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
})

mouse.addEventListener("mouseover", function () {
    console.log("Mouse Over");
})
const button = document.querySelectorAll(".btn");
console.log(button)

Array.from(button).map((button) => {
    button.addEventListener("click", function (e) {
        console.log(e.target.innerText)
    })
})


