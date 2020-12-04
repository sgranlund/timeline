import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { CreateGameView } from "../Views/createGameView.js";

export function CreateGame({ model }) {
  const [query, setQuery]= React.useState("");
  //const counter = useSelector(state => state.counter);
  const dispatchYear = useDispatch();
  //const years = useSelector(state => state.year[0])
  const dispatchName = useDispatch();

  return (
    <CreateGameView
      onNameOne={(name)=>setQuery(name)}
      onNameTwo={(name)=>setQuery(name)}
      //onStart={}
      dispatchYear={dispatchYear}
      dispatchName={dispatchName}
    />
  );
}
