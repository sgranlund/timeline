import React from "react";
import { GameBoardView } from "../Views/gameBoardView.js";

//const h = React.createElement;

const finalSpaceCharacters = [
  {
    id: 'abra',
    name: 'Abraham',
  },
  {
      id: 'seb',
      name: 'Sebastian',
    },
  {
      id: 'hej',
      name: 'Hallå'
  }
]

const [characters, updateCharacters] = React.useState(finalSpaceCharacters);


export function GameBoard() {
  return <GameBoardView />;
}
