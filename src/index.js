//import store from "./app/store";
import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { GameModel } from "./GameModel";

function reducer(state = {}, action) {
  return {};
}
const store = createStore(reducer);
const model = new GameModel();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App model = {model}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
