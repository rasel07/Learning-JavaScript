// Normal away
/*
var number = Number(prompt("Enter your Number : "));
if (number > 0) {
    console.log("positive");
}
else {
    console.log("Nagative");
}*/


/* three Condition
var number = Number(prompt("Enter your Number : "));
if (number > 0) {
    console.log("positive");
}
else if (number > 0) {
    console.log("Nagative");
}
else {
    console.log("Nagative");
}
*/

//Ternary Operator
var numberTer = Number(prompt("Enter your Number : "));
//var result = numberTer > 0 ? "positive" : "nagative"
//numberTer > 0 ? console.log("positive") : console.log("nagative")

var result = numberTer > 0 ? "positive" : numberTer < 0 ? "nagative" : zero;
console.log(result)