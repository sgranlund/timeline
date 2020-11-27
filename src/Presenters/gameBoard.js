import React from "react";
import { GameBoardView } from "../Views/gameBoardView.js";
import { GameBoardView2 } from "../Views/gameBoardView2";

const myData = {
	events: {
		event1: { id: "event1", content: "First event" },
		event2: { id: "event2", content: "Second event" },
		event3: { id: "event3", content: "Third event" },
	},
	columns: {
		column1: {
			id: "column1",
			title: "Player Timeline",
			eventIds: ["event1", "event2"],
		},
		column2: {
			id: "column2",
			title: "Card",
			eventIds: ["event3"],
		},
	},
	columnOrder: ["column1", "column2"],
};


export function GameBoard() {
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
	};
  return(
    <GameBoardView2 
      onDragEnd={onDragEnd}
      newData={newData}
    />
  )
}




const myCharacters = [
  {
    id: "abra",
    name: "Abraham",
  },
  {
    id: "seb",
    name: "Sebastian",
  },
  {
    id: "hej",
    name: "Hallå",
  },
  {
    id: "test",
    name: "test"
  }
];

const myCards = [
  {
    id: "card1",
    name: "year1"
  },
  {
    id: "card2",
    name: "year2"
  }
]


function GameBoard1() {
  const [characters, updateCharacters] = React.useState(myCharacters);
  const [cards, updateCards] = React.useState(myCards);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    console.log(result);
    const items = Array.from(myCharacters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  function handleOnDragEnd2(result) {
    if (!result.destination) return;
    console.log(result);
    const items = Array.from(myCards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCards(items);
  }
  return (
    <GameBoardView
      myCharacters={characters}
      handleOnDragEnd={handleOnDragEnd}
      handleOnDragEnd2={handleOnDragEnd2}
      myCards={cards}
    />
  );
}
