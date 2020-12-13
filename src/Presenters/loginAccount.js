import React from "react";
import { LoginAccountView } from "../Views/loginAccountView";

import { useRef } from "react";
import { useAuth } from "../AUTH/AuthProv";
import { allUsers } from "../AUTH/fetchFromDB";
export function LoginAccount() {
	//loginuser
	const logEmailRef = useRef();
	const logPasswordRef = useRef();
	const { currentUser, logn, logout } = useAuth();
	//Error handeling
	const [error, setError] = React.useState("");
	const [loading, setLoading] = React.useState("");

	async function logIn(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await logn(logEmailRef.current.value, logPasswordRef.current.value);
		} catch (err) {
			console.log(err.message);
			setError("Please create an user");
		}
		setLoading(false);
	}
	async function logginOut() {
		setError("");
		try {
			await logout().then(() => console.log("user signed out"));
		} catch {
			setError("Failed to logout");
		}
	}
	React.useEffect(() => {
		if (currentUser) {
			logginOut();
		}
	}, []);

	function startGame(thisUser) {
		if (thisUser !== null) {
			allUsers(currentUser.uid).then((userInDB) => {
				console.log(userInDB);
				if (userInDB) {
					window.location.pathname = "/gameBoard";
					return;
				} else {
					window.location.pathname = "/createGame";
					return;
				}
			});
		} else {
			console.log("null");
			return;
		}
	}
	return (
		<LoginAccountView
			loading={loading}
			error={error}
			currentUser={currentUser}
			logEmailRef={logEmailRef}
			logPasswordRef={logPasswordRef}
			logIn={logIn}
			startGame={startGame}
		/>
	);
}
