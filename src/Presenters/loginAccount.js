import React from "react";
import { LoginAccountView } from "../Views/loginAccountView";

import { useRef } from "react";
import { useAuth } from "../AUTH/AuthProv";

export function LoginAccount() {
	//loginuser
	const logEmailRef = useRef();
	const logPasswordRef = useRef();
	const { currentUser, logn } = useAuth();
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
	return (
		<LoginAccountView
			loading={loading}
			error={error}
			currentUser={currentUser}
			logEmailRef={logEmailRef}
			logPasswordRef={logPasswordRef}
			logIn={logIn}
		/>
	);
}
