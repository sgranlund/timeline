import React from "react";
import logo from "./images/timeline.webp";
//import { Counter } from "./features/counter/Counter";
import "./css/App.css";
import { LandingPage } from "./Presenters/landingPage";
import { CreateGame } from "./Presenters/createGame";
import { GameFinish } from "./Presenters/gameFinished";
import { GameBoard } from "./Presenters/gameBoard";
import "./css/main.css";
import { useSelector, useStore } from "react-redux";

function App({ model }) {
  const store = useStore();
  let i = 0;
  window.addEventListener(
    "hashchange",
    () => {
      console.log("store.getState()", store.getState(), window.location.hash);
      const hash = window.location.hash;

      console.log("hashC", store.getState().hashName);
      if (store.getState().hashName !== hash) {
        store.dispatch({
          type: "newHash",
          hash,
        });
      }
    },
    false
  );
  store.subscribe(() => {
    i += 1;
    console.log("state updated", store.getState().hashName, i);
  });
  function Show({ hash, children }) {
    const hashC = useSelector((state) => state.hashName);

    return hash === hashC ? children : false;
  }

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/* <Counter /> */}
      </header>
      <Show hash="#landingPage">
        <LandingPage />
      </Show>
      <Show hash="#createGame">
        <CreateGame model={model} />
      </Show>
      <Show hash="#gameFinish">
        <GameFinish />
      </Show>
      <Show hash="#gameBoard">
        <GameBoard />
      </Show>
    </div>
  );
}

export default App;
