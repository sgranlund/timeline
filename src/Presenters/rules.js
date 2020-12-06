import React from "react";
import { RuleView } from "../Views/ruleView";
import { useAuth } from "../AUTH/AuthProv";

export function Rules() {
	const { currentUser } = useAuth();
	return <RuleView currentUser={currentUser} />;
}
