import React from "react";
import { CreateGameView } from "../Views/createGameView.js";

export function CreateGame({ model }) {

  return (
    <CreateGameView
      onNumPlayers={(x) => model.setNumberOfPlayers(x)}
      onSliderChange={(x)=> model.setRange(x)}
    />
  );
}
