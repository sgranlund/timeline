import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Theme/gameBoard.css";
import "./Theme/createGame.css";
import "./Theme/rules.css";
import "./Theme/slider.css";
import "./Theme/main.css";
import "./Theme/landingPage.css";

import "./Theme/login.css";
import "./Theme/gameFinish.css";
import "./Theme/createUser.css";
import "./Theme/stars.css";
import { CreateGame } from "./Presenters/createGame";
import { GameFinish } from "./Presenters/gameFinished";
import { GameBoard } from "./Presenters/gameBoard";
import { Rules } from "./Presenters/rules";

import { LandingPage } from "./Presenters/landingPage";
import { CreateAccount } from "./Presenters/createAccount";
import { LoginAccount } from "./Presenters/loginAccount";
import { AuthProvider } from "./Model/Firebase/AuthProv";

function App({ model }) {
	return (
		<div className="App">
			<header className="App-header"></header>
			<AuthProvider>
				<Router>
					<Switch>
						<Route path="/createGame">
							<CreateGame model={model} />
						</Route>

						<Route path="/gameFinish">
							<GameFinish />
						</Route>

						<Route path="/gameBoard">
							<GameBoard model={model} />
						</Route>
						<Route path="/rules">
							<Rules />
						</Route>
						<Route path="/createAcc">
							<CreateAccount />
						</Route>
						<Route path="/loginAcc">
							<LoginAccount />
						</Route>

						<Route path="/">
							<LandingPage />
						</Route>
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
