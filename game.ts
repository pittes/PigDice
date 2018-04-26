export class Game {
	rollCt: number;
	totalScore: number;
	avgRoll: number;

	constructor(rollCt: number, totalScore: number, avgRoll: number) {
		this.rollCt = rollCt;
		this.totalScore = totalScore;
		this.avgRoll = avgRoll;
	}

	about(): string {
		return `Roll#${this.rollCt}: totalScore=${this.totalScore}, average/roll=${this.avgRoll}`;
	}
}