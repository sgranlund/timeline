//import store from "./app/store";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { GameModel } from "./GameModel";
import allReducers from "./reducers";

const store = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const model = new GameModel();

ReactDOM.render(
	<Provider store={store}>
	<React.StrictMode>
		<App model={model} />
	</React.StrictMode>
	</Provider>,
	document.getElementById("root")
);
