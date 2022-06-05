// creating HTML element
var heading3 = document.createElement("h1");
var text = document.createTextNode("This is Heading 3");
heading3.appendChild(text);

var myDiv = document.getElementById("my-div");
myDiv.appendChild(heading3)

var heading2 = document.getElementsByTagName("h1")[1];
myDiv.removeChild(heading2)
