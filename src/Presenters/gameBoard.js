import React from "react";

import { GameBoardView } from "../Views/gameBoardView";
import { questionSource } from "../apiHandling";
import { GetPromise } from "../getPromise";
import { dataDeliv } from "../dataDelivered";
import { storeBoard } from "../AUTH/addToDB";
import { getCounter } from "../AUTH/fetchFromDB";
import { auth } from "../AUTH/firebase";
import { promiseNoData } from "../Views/promiseNoData";
import { getBoard } from "../AUTH/fetchFromDB";
import { useSelector } from "react-redux";
import store from "../store"

export function GameBoard({ model }) {
	//Create state for what is in which row
  
	const startYear = useSelector((store)=>store.years[0]);
	const endYear = useSelector((store)=>store.years[1]);
	const name1 = useSelector((store)=>store.names.name1[0]);
	const name2 = useSelector((store)=>store.names.name2[0]);

	const [newData, updateData] = React.useState(model.myData);
	//Checks if the database has gameBoardinformation
	React.useEffect(() => {
		if ("person" == "person") {
			let x = getBoard("person");

			x.then((data) => {
				updateData(data);
				console.log("data", data);
			});
			let val = getCounter("person");

			val.then((data) => {
				model.updateCounter(data);
				console.log(data);
			});
		}
	}, []);

	React.useEffect(() => {
		newData.rows.row1.title = name1 + "'s timeline";
		newData.rows.row3.title = name2 + "'s timeline";
	}, []);
	//---------------Styling start---------------//
	const grid = 8;

	const getItemStyle = (isDragging, draggableStyle) => ({
		// some basic styles to make the items look a bit nicer
		userSelect: "none",

		margin: `0 ${grid / 2}px 0 ${grid / 2}px`,
		fontSize: "11px",
		fontFamily:
			"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

		// change background colour if dragging
		borderColor: isDragging ? "lightgreen" : "black",
		backgroundColor: "white",
		// styles we need to apply on draggables
		...draggableStyle,
	});

	const getListStyle = (isDraggingOver) => ({
		//borderBottom: "10px solid black",

		borderColor: isDraggingOver ? "lightgreen" : "black",
		display: "flex",
		padding: grid,
		overflow: "auto",
		height: "23.333%",
	});
	//---------------Styling end---------------//
	const [promise, setPromise] = React.useState(null);
	//Fetches promise for the cards
	React.useEffect(() => {
		setPromise(questionSource.searchYear(model.getRandomNumber(startYear, endYear)));
	}, [model.counter]); //depends on when the counter updates aka when a new card is generated

	//depends on when the counter updates aka when a new card is generated
	//Pulls out the data from the promise
	const [data, error] = GetPromise(promise);

	if (dataDeliv(data)) {
		//Creates an new event with data from the promise
		//Doesn't add it to the row in view
		newData.events["event" + String(model.counter)] = {
			id: "event" + String(model.counter),
			content: data.text.replace(data.number, ""),
			year: data.number,
			acquired: false,
		};
	}
	//const isDragDisabled = myData.events.id === "event1";
	//makes event draggable
	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;
		//Makes sure the item returns to its original place if it's placed wrongly
		if (!destination) {
			return;
		}

		// 	destination.droppableId === source.droppableId &&
		// 	destination.index === source.index
		// ) {
		// 	return;
		// }
		//Labels the cards start and finish location
		const start = newData.rows[source.droppableId];
		const finish = newData.rows[destination.droppableId];
		//Moving in the same list
		if (start === finish) {
			//Copies the start arrays IDS
			const newEventIds = Array.from(start.eventIds);
			//Removes the picked card from it's start
			newEventIds.splice(source.index, 1);
			//Adds the card in new indexed place
			newEventIds.splice(destination.index, 0, draggableId);

			//Updates the eventIDs array
			const newColumn = {
				...start,
				eventIds: newEventIds,
			};

			const newState = {
				...newData,
				rows: {
					...newData.rows,
					[newColumn.id]: newColumn,
				},
			};
			updateData(newState);

			return;
		}

		// Moving from one list to another
		//You can only move cards from "Cards" to a player and not between players or
		// to another player
		if (start.id === "row1" || start.id === "row3") {
			return;
		}
		//Copies the start arrays IDS
		const startEventIds = Array.from(start.eventIds);
		//Removes the picked card from it's start
		startEventIds.splice(source.index, 1);
		//Updates the start array
		const newStart = {
			...start,
			eventIds: startEventIds,
		};
		//Copies the finish array
		const finishEventIds = Array.from(finish.eventIds);
		//Adds the picked card to the finish array
		finishEventIds.splice(destination.index, 0, draggableId);
		//Updates the finish array
		const newFinish = {
			...finish,
			eventIds: finishEventIds,
		};
		// Updates the new board layout
		const newState = {
			...newData,
			rows: {
				...newData.rows,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};

		updateData(newState);
		//If the card stack is empty
		if (newState.rows.row2.eventIds.length === 0) {
			model.updateCounter("undefined");

			//Adds a card to the "Card" array
			const newStart = {
				...start,
				eventIds: ["event" + String(model.counter)],
			};
			//Updates the boards layout
			const newState = {
				...newData,
				rows: {
					...newData.rows,
					[newStart.id]: newStart,
					[newFinish.id]: newFinish,
				},
			};
			//model.checkOrder(newState, "row1");
			//model.checkOrder(newState, "row3");
			//storeBoard(newData, model.counter);
			updateData(newState);
		}
	};
	return (
		<GameBoardView
			onDragEnd={onDragEnd}
			newData={newData}
			getItemStyle={getItemStyle}
			getListStyle={getListStyle}
			checkOrder={model.checkOrder}
			updateData={updateData}
			storeBoard={storeBoard}
			model={model}
		/>
	);
}
