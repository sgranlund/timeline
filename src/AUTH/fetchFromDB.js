import { db } from "./firebase";

export async function getBoard(user) {
	let x = {};
	await db
		.ref(user)
		.once("value")
		.then((snapshot) => {
			if (snapshot.val()) {
				x = { ...Object.values(snapshot.val())[1] };
			}
		});

	return x;
}
export async function getCounter(user) {
	let x2 = {};
	await db
		.ref(user)
		.once("value")
		.then((snapshot) => {
			if (snapshot.val()) {
				x2 = Object.values(snapshot.val())[0];
			}
		});

	return x2;
}
