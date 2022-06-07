//document.querySelector("button").addEventListener("click", function () {
//   alert("hello")
//})


var myVr = document.querySelector("h1");
myVr.addEventListener("mouseover", function () {
    myVr.classList.add("head")

});

myVr.addEventListener("mouseout", function () {
    myVr.classList.remove("head")

});