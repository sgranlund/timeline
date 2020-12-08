import React from "react";
import { CreateAccountView } from "../Views/createAccountView";
import { useRef } from "react";
import { useAuth } from "../AUTH/AuthProv";

export function CreateAccount() {
	//createUser
	const createEmailRef = useRef();
	const createPasswordRef = useRef();
	const passwordConfirmRef = useRef();
	const { currentUser, signup } = useAuth();
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

	return (
		<CreateAccountView
			createEmailRef={createEmailRef}
			createPasswordRef={createPasswordRef}
			passwordConfirmRef={passwordConfirmRef}
			submitting={submitting}
			loading={loading}
			error={error}
			currentUser={currentUser}
		/>
	);
}
