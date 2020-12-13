import React from "react";
import { CreateAccountView } from "../Views/createAccountView";
import { useRef } from "react";
import { useAuth } from "../Model/Firebase/AuthProv";

export function CreateAccount() {
	//createUser
	const createEmailRef = useRef();
	const createPasswordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, signup, logout } = useAuth();
	//Error handeling
	const [error, setError] = React.useState("");
	const [loading, setLoading] = React.useState("");

	async function submitting(e) {
		e.preventDefault();
		if (createPasswordRef.current.value !== passwordConfirmRef.current.value) {
			return setError("Passwords not matching");
		}
		try {
			setError("");
			setLoading(true);
			await signup(
				createEmailRef.current.value,
				createPasswordRef.current.value
			);
		} catch (err) {
			setError(err.message);
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
			console.log("createGame");
			window.location.pathname = "/createGame";
			return;
		} else {
			console.log("null");
			return;
		}
	}

	return (
		<CreateAccountView
			createEmailRef={createEmailRef}
			createPasswordRef={createPasswordRef}
			passwordConfirmRef={passwordConfirmRef}
			submitting={submitting}
			loading={loading}
			error={error}
			currentUser={currentUser}
			startGame={startGame}
		/>
	);
}
