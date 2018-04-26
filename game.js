"use strict";
exports.__esModule = true;
var Game = /** @class */ (function () {
    function Game(rollCt, totalScore, avgRoll) {
        this.rollCt = rollCt;
        this.totalScore = totalScore;
        this.avgRoll = avgRoll;
    }
    Game.prototype.about = function () {
        return "Roll#" + this.rollCt + ": totalScore=" + this.totalScore + ", average/roll=" + this.avgRoll;
    };
    return Game;
}());
exports.Game = Game;
