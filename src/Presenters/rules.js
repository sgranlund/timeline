import React from "react";
import { RuleView } from "../Views/ruleView";
import { useHistory } from "react-router-dom";

export function Rules() {
	const back = useHistory();
	function goBack() {
		return back.goBack();
	} 
	return <RuleView 
				goBack={goBack}
			/>;
}
