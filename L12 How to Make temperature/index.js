// How to make fahrenheit to celcius 

var farn = parseFloat(prompt("Enter your Fahrenhite : "));
var cels = (farn - 32) * (5 / 9);

document.write("Celsius = " + cels + "<br>")


// How to make celcius to  fahrenheit 

var cels = parseFloat(prompt("Enter your Celsius = "));
var farn = (cels * (9 / 5)) + 32;

document.write("Fahrenheit = " + farn)