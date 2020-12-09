import React from "react";
import { GameFinishedView } from "../Views/gameFinishedView.js";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"


export function GameFinish() {
  const name1 = useSelector((store) => store.names.name1[0]);
	const name2 = useSelector((store) => store.names.name2[0]);
	const pointsPlay1 = useSelector((store) => store.points.player1);
  const pointsPlay2 = useSelector((store) => store.points.player2);


  console.log("name1", name1)

  const countWinner = () => {
    let winner = "";
    if (pointsPlay1 > pointsPlay2) {
      winner = name1
    }
    if (pointsPlay1 < pointsPlay2) {
      winner = name2
    }
    console.log(winner)
    return winner
  }
  
  return (
  <GameFinishedView 
    name1={name1}
    name2={name2}
    pointsPlay1={pointsPlay1}
    pointsPlay2={pointsPlay2}
    countWinner={countWinner}
  />
  );
}
