import { all } from "ramda";
import { questionSource } from "./apiHandling";
export class GameModel {
	constructor(
		players = 2,
		startYear = 1000,
		endYear = 2020,
		gameName = "",
		counter = 4,
		range = [startYear, endYear]
	) {
		this.numberOfPlayers = players;
		this.startYear = startYear;
		this.endYear = endYear;
		this.gameName = gameName;
		this.myData = this.getApiData();
		this.counter = counter;
		this.range = range;
	}

	setNumberOfPlayers(x) {
		if (x < 2) throw "Number of players cannot less than two";
		this.numberOfPlayers = x;
	}
	getNumberOfPlayers() {
		return this.numberOfPlayers;
	}
	setStartYear(x) {
		this.startYear = x;
	}
	setEndYear(x) {
		this.endYear = x;
	}
	getStartYear() {
		return this.startYear;
	}
	getEndYear() {
		return this.endYear;
	}
	setRange(x) {
		this.startYear = x[0];
		this.endYear = x[1];
	}
	setGameName(name) {
		this.gameName = name;
		console.log(this.gameName);
	}
	getGameName() {
		return this.gameName;
	}
	updateCounter() {
		return (this.counter += 1);
	}
	getRandomNumber() {
		let x = Math.floor(
			Math.random() * (Math.floor(this.endYear) - Math.ceil(this.startYear)) +
				Math.ceil(this.startYear)
		);
		//console.log(x);
		return x;
	}
	// deleteCards(allCardsData, row) {
	// 	allCardsData.rows[row].eventIds.map((y) => {
	// 		if (allCardsData.events[y].acquired === false) {
	// 			delete allCardsData.events[y];
	// 			this.counter -= 1;
	// 		}
	// 	});
	// }
	checkOrder(cardsData, row) {
		let allCardsData = { ...cardsData };
		// define the array
		let theTimeline = [];
		allCardsData.rows[row].eventIds.map((y) => {
			theTimeline.push(allCardsData.events[y].year);
		});
		console.log("theArray", theTimeline);
		var isDescending = true;
		var isAscending = true;

		for (var i = 0, l = theTimeline.length - 1; i < l; i++) {
			// true if this is greater than the next and all other so far have been true
			isDescending = isDescending && theTimeline[i] > theTimeline[i + 1];

			// true if this is less than the next and all others so far have been true
			isAscending = isAscending && theTimeline[i] < theTimeline[i + 1];
		}

		if (isAscending) {
			console.log(row + " Correct");
			allCardsData.rows[row].eventIds.map((y) => {
				allCardsData.events[y].acquired = true;
			});
			return allCardsData;
		}
		if (isDescending) {
			console.log(row + " Incorrect, decending");
			allCardsData.rows[row].eventIds.map((y) => {
				if (allCardsData.events[y].acquired === false) {
					allCardsData.rows[row].eventIds = allCardsData.rows[
						row
					].eventIds.filter((arr) => {
						return arr !== allCardsData.events[y].id;
					});

					delete allCardsData.events[y];
				}
			});
			return allCardsData;
		} else {
			console.log(row + " Incorrect, not sorted");
			allCardsData.rows[row].eventIds.map((y) => {
				if (allCardsData.events[y].acquired === false) {
					allCardsData.rows[row].eventIds = allCardsData.rows[
						row
					].eventIds.filter((arr) => {
						return arr !== allCardsData.events[y].id;
					});

					delete allCardsData.events[y];
				}
			});
			return allCardsData;
		}
	}
	getApiData() {
		//Creates the initial data for the board layout
		let localMyData = {
			events: {
				event1: {
					id: "event1",
					content: "",
					year: 0,
					acquired: true,
				},
				event2: {
					id: "event2",
					content: "",
					year: 0,
					acquired: false,
				},
				event3: {
					id: "event3",
					content: "",
					year: 0,
					acquired: true,
				},
			},
			rows: {
				row1: {
					id: "row1",
					title: "Player 1 Timeline",
					eventIds: ["event1"],
				},
				row2: {
					id: "row2",
					title: "Card",
					eventIds: ["event2"],
				},
				row3: {
					id: "row3",
					title: "Player 2 timeline",
					eventIds: ["event3"],
				},
			},
			rowOrder: ["row1", "row2", "row3"],
		};
		//Fetches data from the API with a random year
		questionSource.searchYear(this.getRandomNumber()).then((data) => {
			localMyData.events.event1.content = data.text.replace(data.number, "");
			localMyData.events.event1.year = data.number;
		}); //lägga in then i data
		questionSource.searchYear(this.getRandomNumber()).then((data) => {
			localMyData.events.event2.content = data.text.replace(data.number, "");
			localMyData.events.event2.year = data.number;
		});
		questionSource.searchYear(this.getRandomNumber()).then((data) => {
			localMyData.events.event3.content = data.text.replace(data.number, "");
			localMyData.events.event3.year = data.number;
		});

		return localMyData;
	}
}
