import { db } from "./firebase";

export async function getAllData(user) {
	let x2 = {
		counter: 0,
		board: {},
		theYears: [],
		name1: "",
		name2: "",
		pointsPlay1: 0,
		pointsPlay2: 0,
		turn: 0,
	};
	await db
		.ref(user)
		.once("value")
		.then((snapshot) => {
			if (snapshot.val()) {
				x2.theYears[0] = Object.values(snapshot.val())[7];
				x2.theYears[1] = Object.values(snapshot.val())[1];

				x2.counter = Object.values(snapshot.val())[0];
				x2.board = Object.values(snapshot.val())[2];
				x2.name1 = Object.values(snapshot.val())[3];
				x2.name2 = Object.values(snapshot.val())[4];
				x2.pointsPlay1 = Object.values(snapshot.val())[5];
				x2.pointsPlay2 = Object.values(snapshot.val())[6];
				x2.turn = Object.values(snapshot.val())[8];
			}
		});

	return x2;
}
export async function allUsers(user) {
	let x = false;
	await db
		.ref(user)
		.once("value")
		.then((snapshot) => {
			x = snapshot.exists();
			console.log("User exists");
		});
	return x;
}

export async function deleteGame(user) {
	await db.ref(user).remove();
	//let userRef = db.ref(user);
	//userRef.remove();
	console.log("user", user, "removed");
}
