// 1+2+3+4+5=
/*
var m = parseInt(prompt(" enter The starting Number"));
var n = parseInt(prompt("Enter the last Number"));
var sum = 0;

for (var x = m; x <= n; x = x + 1) {

    sum = sum + x;
}

document.write(sum) */

for (var x = 1; x <= 5; x++) {
    var num = parseInt(prompt("Please Enter your number : "));
    var num2 = parseInt(prompt("Please Enter your number 2 : "))

    var sum = num + num2;
    console.log("Result : " + sum)


}


