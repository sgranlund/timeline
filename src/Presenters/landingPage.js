import React from "react";
import { LandingPageView } from "../Views/landingPageView.js";

import { useRef } from "react";
import { useAuth } from "../AUTH/AuthProv";

export function LandingPage() {
	//createUser
	const createEmailRef = useRef();
	const createPasswordRef = useRef();
	const passwordConfirmRef = useRef();
	//loginuser
	const logEmailRef = useRef();
	const logPasswordRef = useRef();
	const { currentUser, signup } = useAuth();
	const { logn } = useAuth();
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
		} catch {
			setError("Failed to create user");
		}
		setLoading(false);
	}
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
		<LandingPageView
			createEmailRef={createEmailRef}
			createPasswordRef={createPasswordRef}
			passwordConfirmRef={passwordConfirmRef}
			submitting={submitting}
			loading={loading}
			error={error}
			currentUser={currentUser}
			logEmailRef={logEmailRef}
			logPasswordRef={logPasswordRef}
			logIn={logIn}
		/>
	);
}
