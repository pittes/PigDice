import { Game } from './game';

let req: number = 10;	// Number of games to run

function rollDie(): number {
	return Math.floor(Math.random()*6) + 1;
}

let highScore: number = 0;
let cummRollCnt: number = 0;
for (let i: number = 0; i < req; i++) {

	let roll: number = 0;	// Score for a single roll
	let nbrRoll: number = 0;	// Number of rolls completed for one game
	let gameTotal: number = 0;	// Score total for one game

	let rollArray: number[] = [];	// Array of rolls for one game

	while (roll != 1) {
		roll = rollDie();
		nbrRoll++;
		gameTotal += roll;
		if (roll === 1) {
			gameTotal--;
		} else {
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
let average: number = cummRollCnt/req;	// Calculate average # of rolls per game
console.log('Highest score=' + highScore + "\tAverage rolls/game=" + average.toFixed() + " over "+req+" games");

function gameStats(gameTotal: number, nbrRoll: number, rollArray: number[]) {
	// Under construction to include frequency calculations
	let two: number = 0;
	let three: number = 0;
	let four: number = 0;
	let five: number = 0;
	let six: number = 0;
	// let freqArray: <Array>;
	// let mostFrequent: number = 0;
	for (let rA of rollArray) {
		switch (rA) {
			case 2:
				two++; break;
			case 3:
				three++; break;
			case 4:
				four++; break;
			case 5:
				five++; break;
			case 6:
				six++; break;
		}
	}
	// freqArray = [{Nbr: '2', Value: two}, {Nbr: '3', Value: three}, {Nbr: '4', Value: four,
	// 				{Nbr: '5', Value: five}, {Nbr: '6', Value: six}];
	// mostFrequent = Math.indexOf(Math.max(freqArray));
	console.log("Game score=" + gameTotal + "\t#Rolls=" + nbrRoll);
}

