// digit spelling
//The switch statement is used to perform different actions based on different conditions.
// switch, case, break, default

/*var digit = prompt(" Enter any Digit : ");

switch (digit) {
    case "0":
        console.log("zero");
        break;
    case "1":
        console.log("One");
        break;
    case "2":
        console.log("Two");
        break;
    case "3":
        console.log("Three");
        break;
    case "4":
        console.log("Four");
        break;
    case "5":
        console.log("Five");
        break;
    case "6":
        console.log("Six");
        break;
    case "7":
        console.log("Seven");
        break;
    case "8":
        console.log("Eight");
        break;
    case "9":
        console.log("Nine");
        break;
    default:
        console.log("No Digit")
}*/

// Task 5 - input a letter and check is vowel or consonant using switch

var letter = prompt(" Enter any Letter  : ");
letter = letter.toLocaleLowerCase();

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("vowel");
        break;

    default:
        console.log("Consonant")
}
