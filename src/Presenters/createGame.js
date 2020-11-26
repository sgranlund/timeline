import React from "react";
import { CreateGameView } from "../Views/createGameView.js";
import { signup } from "../AUTH/gameAuth";

//const h = React.createElement;

export function CreateGame({ model }) {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  return (
    <CreateGameView
      onNumPlayers={(x) => model.setNumberOfPlayers(x)}
      onStartYear={(x) => model.setStartYear(x)}
      onEndYear={(x) => model.setEndYear(x)}
      startYear={() => model.getStartYear()}
      endYear={() => model.getEndYear()}
      onName={(name) => model.setGameName(name)}
      onFormChangeEmail={(e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
      }}
      onFormChangePass={(e) => {
        console.log(e.target.value);
        setPass(e.target.value);
      }}
      onFormSubmit={(e) => {
        e.preventDefault();
        signup(email, pass);
        console.log("Account created");
      }}
    />
  );
}
