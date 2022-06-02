// Guessin Game
// Gusses A Number from 1 to 5
// Generate Random Number between 1 to 5
// If the guess number matches random number; then show message won else lost
// Run the game for 5 times
// show the number of wons and losts


var numOfWon = 0;
var numOfLost = 0;
for (var i = 1; i <= 5; i++) {
    var guessNumber = parseInt(prompt(" Enter A Number from 1 to 5 :"));
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    if (guessNumber === randomNumber) {
        console.log("You have won");
        numOfWon++;
    }

    else {
        console.log("You have Lost. Random Number was" + randomNumber);
        numOfLost++;
    }

}
document.write("Total Number of won : " + numOfWon + "<br>")
document.write("Total Number of won : " + numOfLost + "<br>")


