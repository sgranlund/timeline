import React from "react";

import { GameBoardView } from "../Views/gameBoardView";
import { questionSource } from "../apiHandling";
import { GetPromise } from "../getPromise";
import { dataDeliv } from "../dataDelivered";
import { storeBoard } from "../AUTH/addToDB";
import { getAllData, deleteGame } from "../AUTH/fetchFromDB";
import { useSelector } from "react-redux";
import { useAuth } from "../AUTH/AuthProv";
import { allUsers } from "../AUTH/fetchFromDB";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { increase1, increase2, change, name, name2 } from "../actions";

export function GameBoard({ model }) {
	//Create state for what is in which row

	const { currentUser } = useAuth();
	const startYear = useSelector((store) => store.years[0]);
	const endYear = useSelector((store) => store.years[1]);
	const nameNr1 = useSelector((store) => store.names.name1);
	const nameNr2 = useSelector((store) => store.names.name2);
	const pointsPlay1 = useSelector((store) => store.points.player1);
	const pointsPlay2 = useSelector((store) => store.points.player2);
	const dispatch = useDispatch();

	const [newData, updateData] = React.useState(model.myData);
	const [turn, updateTurn] = React.useState(0);
	const [userTurn, updateUserTurn] = React.useState("");
	console.log(userTurn);
	React.useEffect(() => {
		//Checks if the user has a ongoing game
		allUsers(currentUser.uid).then((userInDB) => {
			console.log(userInDB);
			console.log(currentUser.uid);
			if (userInDB) {
				//Fetches all the important data from database
				let allTheData = getAllData(currentUser.uid);
				allTheData.then((data) => {
					console.log(data);
					updateData(data.board);
					model.updateCounter(data.counter);
					dispatch(change(data.theYears));
					dispatch(increase1(data.pointsPlay1));
					dispatch(increase2(data.pointsPlay2));
					dispatch(name(data.name1));
					dispatch(name2(data.name2));
				});
			}
		});
	}, []);

	React.useEffect(() => {
		newData.rows.row1.title = nameNr1 + "'s timeline";
		newData.rows.row3.title = nameNr2 + "'s timeline";
	});
	console.log(startYear, endYear);
	const [promise, setPromise] = React.useState(null);
	//Fetches promise for the cards
	React.useEffect(() => {
		setPromise(
			questionSource.searchYear(model.getRandomNumber(startYear, endYear))
		);
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
		console.log(data.text, data.number);
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
		if (finish.id === userTurn) {
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
	const history = useHistory();

	const Points = () => {
		dispatch(increase1(newData.rows.row1.eventIds.length));
		dispatch(increase2(newData.rows.row3.eventIds.length));
		if (
			newData.rows.row1.eventIds.length > 4 ||
			newData.rows.row3.eventIds.length > 4
		) {
			history.push("/gameFinish");
			deleteGame(currentUser.uid);
		}
	};
	function playerTurn(rowId, turn) {
		if (rowId === "row2") {
			if (turn % 2 === 0) {
				updateUserTurn("row3");
				return "row3";
			} else {
				updateUserTurn("row1");
				return "row1";
			}
		}
	}

	return (
		<GameBoardView
			onDragEnd={onDragEnd}
			newData={newData}
			checkOrder={model.checkOrder}
			updateData={updateData}
			storeBoard={storeBoard}
			counter={model.counter}
			currentUser={currentUser.uid}
			points={Points}
			startYear={startYear}
			endYear={endYear}
			nameNr1={nameNr1}
			nameNr2={nameNr2}
			pointsPlay1={pointsPlay1}
			pointsPlay2={pointsPlay2}
			turn={turn}
			updateTurn={updateTurn}
			userTurn={userTurn}
			playerTurn={playerTurn}
		/>
	);
}
