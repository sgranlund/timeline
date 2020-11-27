import React from "react";
import { GameBoardView } from "../Views/gameBoardView.js";
import { GameBoardView2 } from "../Views/gameBoardView2";
import { questionSource } from "../apiHandling";
import { GetPromise } from "../getPromise";
import { dataDeliv } from "../dataDelivered";

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
  const [year, updateYear] = React.useState();

  const [promise, setPromise] = React.useState(null);
  React.useEffect(() => setPromise(questionSource.searchYear(2000)), []);

  const [data, error] = GetPromise(promise);
  if (dataDeliv(data)) {
    console.log("hej emilia", data.text);
  }

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
  return <GameBoardView2 onDragEnd={onDragEnd} newData={newData} />;
}
