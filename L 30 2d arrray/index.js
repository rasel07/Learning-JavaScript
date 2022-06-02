//2D array
// Create a fuction called highestRunScrore that will 
// Receive a 2d array called playersInfo
// Based on highest score, return the name of the player 

function highestRunScrore(playersInfo) {
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];

    for (var x = 1; x < playersInfo.length; x++) {
        if (highestScore < playersInfo[x][1]) {
            highestScore = playersInfo[x][1];
            highestScorer = playersInfo[x][0];
        }
    }
    return (highestScorer)
}

// 2d Array
var playersInfo = [
    ["Ashraful", 10],
    ["Tamim", 55],
    ["Liton Das", 120],
    ["Rakib", 300],
    ["Mashrafi", 200],
];
var namea = highestRunScrore(playersInfo);

console.log(namea);
