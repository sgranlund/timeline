import React from "react";
import { GameBoardView } from "../Views/gameBoardView.js";

//const h = React.createElement;

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
];

export function GameBoard() {
  const [characters, updateCharacters] = React.useState(myCharacters);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    console.log(result);
    const items = Array.from(myCharacters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
    <GameBoardView
      myCharacters={characters}
      handleOnDragEnd={handleOnDragEnd}
    />
  );
}
