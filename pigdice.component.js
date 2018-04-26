"use strict";
exports.__esModule = true;
var req = 10; // Number of games to run
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}
var highScore = 0;
var cummRollCnt = 0;
for (var i = 0; i < req; i++) {
    var roll = 0; // Score for a single roll
    var nbrRoll = 0; // Number of rolls completed for one game
    var gameTotal = 0; // Score total for one game
    var rollArray = []; // Array of rolls for one game
    while (roll != 1) {
        roll = rollDie();
        nbrRoll++;
        gameTotal += roll;
        if (roll === 1) {
            gameTotal--;
        }
        else {
            cummRollCnt++;
            rollArray.push(roll);
        }
        // console.log('You rolled a ' + roll + ' on roll#' + nbrRoll + '\tGame score=' + gameTotal);
    }
    nbrRoll--;
    if (gameTotal > highScore) {
        highScore = gameTotal;
    }
    console.log(rollArray);
    gameStats(gameTotal, nbrRoll, rollArray);
}
var average = cummRollCnt / req; // Calculate average # of rolls per game
console.log('Highest score=' + highScore + "\tAverage rolls/game=" + average.toFixed() + " over " + req + " games");
function gameStats(gameTotal, nbrRoll, rollArray) {
    // Under construction to include frequency calculations
    var two = 0;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;
    // let freqArray: <Array>;
    // let mostFrequent: number = 0;
    for (var _i = 0, rollArray_1 = rollArray; _i < rollArray_1.length; _i++) {
        var rA = rollArray_1[_i];
        switch (rA) {
            case 2:
                two++;
                break;
            case 3:
                three++;
                break;
            case 4:
                four++;
                break;
            case 5:
                five++;
                break;
            case 6:
                six++;
                break;
        }
    }
    // freqArray = [{Nbr: '2', Value: two}, {Nbr: '3', Value: three}, {Nbr: '4', Value: four,
    // 				{Nbr: '5', Value: five}, {Nbr: '6', Value: six}];
    // mostFrequent = Math.indexOf(Math.max(freqArray));
    console.log("Game score=" + gameTotal + "\t#Rolls=" + nbrRoll);
}
