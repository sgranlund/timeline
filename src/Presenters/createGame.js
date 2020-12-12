import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CreateGameView } from "../Views/createGameView.js";

export function CreateGame({ model }) {
	const dispatchYear = useDispatch();
	const dispatchName = useDispatch();
	const startYear = useSelector((store) => store.years[0]);
	const endYear = useSelector((store) => store.years[1]);

	function getYearSpan() {
		model.getApiData(startYear, endYear);
		console.log(startYear, endYear);
	}

	return (
		<CreateGameView
			dispatchYear={dispatchYear}
			dispatchName={dispatchName}
			model={model}
			startYear={startYear}
			endYear={endYear}
			getYearSpan={getYearSpan}
		/>
	);
}
