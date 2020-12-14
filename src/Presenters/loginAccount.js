import React from "react";
import { LoginAccountView } from "../Views/loginAccountView";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../Model/Firebase/AuthProv";
import { allUsers } from "../Model/Firebase/fetchFromDB";
export function LoginAccount() {
	const hi = useHistory();
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
			setError("Please create an user");
		}
		setLoading(false);
	}
	async function logginOut() {
		setError("");
		try {
			await logout().then(() => {});
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
				if (userInDB) {
					hi.push("/gameBoard");
					return;
				} else {
					hi.push("/createGame");
					return;
				}
			});
		} else {
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
