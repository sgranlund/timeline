import { CreateCards } from "./createCards";

export class GameModel {
	constructor(players = 2, startyear = 0, endyear = 2020, gameName = "") {
		this.numberOfPlayers = players;
		this.startyear = startyear;
		this.endyear = endyear;
		this.gameName = gameName;
	}

	setNumberOfPlayers(x) {
		if (x < 2) throw "Number of players cannot less than two";
		this.numberOfPlayers = x;
	}
	getNumberOfPlayers() {
		return this.numberOfPlayers;
	}
	setStartYear(x) {
		this.startyear = x;
		console.log("start", this.startyear);
	}
	setEndYear(x) {
		this.endyear = x;
		console.log("end", this.endyear);
	}
	getStartYear() {
		return this.startyear;
	}
	getEndYear() {
		return this.endyear;
	}
	setGameName(name) {
		this.gameName = name;
		console.log(this.gameName);
	}
	getGameName() {
		return this.gameName;
	}
}
