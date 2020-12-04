import { logDOM } from "@testing-library/react";
import React from "react";
import { TestView } from "../Views/testView";

export function Test() {
	const logo = document.querySelectorAll("#timelineLogo path");
	for (let i = 0; i < logo.length; i++) {
		console.log(` ${logo[i].getTotalLength()}`);
	}
	return <TestView />;
}
