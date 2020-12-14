//import store from "./app/store";
import React from "react";
import ReactDOM from "react-dom";
import "./Theme/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { GameModel } from "./Model/GameModel";
import store from "./Model/Redux/store";

const model = new GameModel();

ReactDOM.render(
		<Provider store={store}>
			<App model={model} />
		</Provider>,
	document.getElementById("root")
);
