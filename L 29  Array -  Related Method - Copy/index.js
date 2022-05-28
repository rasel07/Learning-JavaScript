// One Dimensiona Array
// Create a function called highestScore that
// Receive a 1d array called scores
// return the highest socre

function highestScore(scores) {
    var max = scores[0];
    for (var x = 1; x < scores.length; x++) {
        if (max < scores[x]) {
            max = scores[x];
        }
    }
    return max;
}
var scores = [21, 2021, 1, 99, 16545];
var maxScore = highestScore(scores);
console.log(maxScore)