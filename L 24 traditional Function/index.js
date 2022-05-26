// function
// why funcion 
// creatign a function

var num1 = parseFloat(prompt(" Enter Number one : "));
var num2 = parseFloat(prompt(" Enter Number two : "));

function addition(num1, num2) {
    var result = num1 + num2;
    return result;
}

function subtraction(num1, num2) {
    var result = num1 - num2;
    return result;
}

function multiplication(num1, num2) {
    var result = num1 * num2;
    return result;
}

function exponentiation(num1, num2) {
    var result = num1 ** num2;
    return result;
}

function division(num1, num2) {
    var result = num1 / num2;
    return result;
}

function modulus(num1, num2) {
    var result = num1 % num2;
    return result;
}

document.write("Result Addition = " + addition(num1, num2) + "<br>");
document.write("Result Subtraction = " + subtraction(num1, num2) + "<br>");
document.write("Result Multiplication = " + multiplication(num1, num2) + "<br>");
document.write("Result Exponentiation = " + exponentiation(num1, num2) + "<br>");
document.write("Result Division = " + division(num1, num2) + "<br>");
document.write("Result Modulus = " + modulus(num1, num2) + "<br>");




