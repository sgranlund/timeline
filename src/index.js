//import store from "./app/store";
import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { GameModel } from "./GameModel";

const model = new GameModel();

const store = createStore(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App model={model} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
