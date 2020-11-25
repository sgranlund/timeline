//import store from "./app/store";
import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { GameModel } from "./GameModel";
import { combineReducers } from "redux";
import hashReducer from "./hash.js";
import reducer from "./reducer.js";

const model = new GameModel();

const allReducers = combineReducers({ hashName: hashReducer, reduce: reducer });

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// window.addEventListener(
//   "hashchange",
//   () => {
//     console.log("store.getState()", store.getState(), window.location.hash);
//     const hash = window.location.hash;

//     if (store.getState() !== hash) {
//       store.dispatch({
//         type: "newHash",
//         hash,
//       });
//     }
//   },
//   false
// );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App model={model} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
