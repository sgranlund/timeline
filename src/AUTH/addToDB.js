import { db } from "./firebase";

export function storeBoard(gameBoardData, counterData, user) {
	db.ref(user).set({
		gameBoard: gameBoardData,
		counter: counterData,
	});
	console.log("added to DB");
}
