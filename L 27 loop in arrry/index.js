// Loop in arry
/*
var num = [10, 20, 30, 40, 60, 70];
var sum = 0;
for (var i = 0; i < 5; i++) {
    console.log(num[i]);
    sum = sum + num[i];

}

console.log("Sum = " + sum);*/

// get Input from User 

var num = new Array()

for (var i = 0; i < 5; i++) {
    num[i] = parseInt(prompt(" Enter Your Number : "));

}

var sum = 0;

for (var i = 0; i < 5; i++) {
    console.log(num[i])
    sum = sum + num[i];


}

console.log("Sum = " + sum)

