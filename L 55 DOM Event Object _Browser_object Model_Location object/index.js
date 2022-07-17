// BOM  (Browser Object Model)
// window object
// location object
console.clear()
//console.log(location)
// href
//console.log(location.href)

// protocol
//console.log(location.protocol)

// hostneme
//console.log(location.hostname)

// Port
//console.log(location.port)

// Path Name
//console.log(location.pathname)

let locationDiv = document.querySelector(".location-div");
var p1 = locationDiv.children[0]
p1.textContent = location.href;

var p2 = locationDiv.children[1]
p2.textContent = location.hostname;

var p3 = locationDiv.children[2]
p3.textContent = location.protocol;

var p4 = locationDiv.children[3]
p4.textContent = location.port;

var p5 = locationDiv.children[4]
p5.textContent = location.pathname;

const visitMY = document.querySelector("#visited");

visitMY.addEventListener("click", function () {
    location.assign("https://raselkabir.me")
})