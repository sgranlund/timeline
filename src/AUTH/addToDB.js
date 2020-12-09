import { db } from "./firebase";

export function storeBoard(
	gameBoardData,
	counterData,
	user,
	startYearLocal,
	endYearLocal,
	name1Local,
	name2Local,
	pointsPlay1Local,
	pointsPlay2Local
) {
	db.ref(user).set({
		gameBoard: gameBoardData,
		counter: counterData,
		startYear: startYearLocal,
		endYear: endYearLocal,
		name1: name1Local,
		name2: name2Local,
		pointsPlay1: pointsPlay1Local,
		pointsPlay2: pointsPlay2Local,
	});
	console.log("added to DB");
}
