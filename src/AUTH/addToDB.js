import { db } from "./firebase";

export function storeBoard(gameBoardData, counterData) {
	db.ref("person").set({
		gameBoard: gameBoardData,
		counter: counterData,
	});
	console.log("added to DB");
}
