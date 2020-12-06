import React, { useContext, useEffect, useState } from "react";

import { auth } from "./firebase";
const AuthContxt = React.createContext();
export function useAuth() {
	return useContext(AuthContxt);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentuser] = useState();
	const [loading, setLoading] = useState(true);
	function signup(email, password) {
		return auth().createUserWithEmailAndPassword(email, password);
	}
	function logn(email, password) {
		return auth().signInWithEmailAndPassword(email, password);
	}
	useEffect(() => {
		const unsubscribe = auth().onAuthStateChanged((user) => {
			setCurrentuser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		logn,
	};
	return (
		<AuthContxt.Provider value={value}>
			{!loading && children}
		</AuthContxt.Provider>
	);
}
