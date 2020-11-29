import React from "react";
import { GameBoardView } from "../Views/gameBoardView.js";
import { GameBoardView2 } from "../Views/gameBoardView2";
import { questionSource } from "../apiHandling";
import { GetPromise } from "../getPromise";
import { dataDeliv } from "../dataDelivered";
import { CreateCards } from "../createCards.js";

let counter = 3;
export function GameBoard() {
	//console.log(myData);
	const myData = CreateCards(10);
	const [newData, updateData] = React.useState(myData);

	//const isDragDisabled = myData.events.id === "event1";

	const onDragEnd = (result) => {
		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		const start = newData.columns[source.droppableId];
		const finish = newData.columns[destination.droppableId];
		if (start === finish) {
			const newEventIds = Array.from(start.eventIds);
			newEventIds.splice(source.index, 1);
			newEventIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...start,
				eventIds: newEventIds,
			};

			const newState = {
				...newData,
				columns: {
					...newData.columns,
					[newColumn.id]: newColumn,
				},
			};
			updateData(newState);

			return;
		}

		// Moving from one list to another
		const startEventIds = Array.from(start.eventIds);
		startEventIds.splice(source.index, 1);
		const newStart = {
			...start,
			eventIds: startEventIds,
		};

		const finishEventIds = Array.from(finish.eventIds);
		finishEventIds.splice(destination.index, 0, draggableId);
		const newFinish = {
			...finish,
			eventIds: finishEventIds,
		};

		const newState = {
			...newData,
			columns: {
				...newData.columns,
				[newStart.id]: newStart,
				[newFinish.id]: newFinish,
			},
		};

		updateData(newState);

		if (newState.columns.column2.eventIds.length == 0) {
			//console.log("hej", newState.columns.column2.eventIds);
			counter += 1;

			const newStart = {
				...start,
				eventIds: ["event" + String(counter)],
			};

			const newState = {
				...newData,
				columns: {
					...newData.columns,
					[newStart.id]: newStart,
					[newFinish.id]: newFinish,
				},
			};

			updateData(newState);
		}
	};
	return (
		<GameBoardView2
			onDragEnd={onDragEnd}
			newData={newData}
			myData={CreateCards(10)}
		/>
	);
}
