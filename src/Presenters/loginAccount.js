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
		} catch {
			setError("Failed to login");
		}
		setLoading(false);
	}
	async function logginOut() {
		setError("");
		try {
			await logout().then(() => console.log("user signed out"));
			window.location.pathname = "/test";
		} catch {
			setError("Failed to logout");
		}
	}
	function startGame(thisUser) {
		if (thisUser !== null) {
			window.location.pathname = "/gameBoard";
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
			logginOut={logginOut}
			startGame={startGame}
		/>
	);
}
