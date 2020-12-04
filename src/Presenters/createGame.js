import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { CreateGameView } from "../Views/createGameView.js";

export function CreateGame({ model }) {
  const dispatchYear = useDispatch();
  const dispatchName = useDispatch();

  return (
    <CreateGameView
      dispatchYear={dispatchYear}
      dispatchName={dispatchName}
    />
  );
}
