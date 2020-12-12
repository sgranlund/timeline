import { change } from "../actions";
import { name } from "../actions";
import { name2 } from "../actions";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/timeline.svg";
import rules from "../images/rules.svg";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export const CreateGameView = ({ dispatchYear, dispatchName, getYearSpan }) => (
	<div>
		<div id="stars"></div>
		<div id="stars2"></div>
		<div id="stars3"></div>
		<Logo
			id="timelineHomeButton"
			onClick={() => (window.location.pathname = "")}
		/>

		<div className="createGame">
			<span>Create Game</span>
		</div>
		<div className="timeRange">
			<span>Choose between which years you want to play</span>
		</div>
		<div className="sliderArea">
			<Range
				defaultValue={[1000, 2020]}
				marks={{
					1000: `1000`,
					2020: `2020`,
				}}
				step={10}
				min={1000}
				max={2020}
				tipFormatter={(value) => ` ${value}`}
				tipProps={{
					placement: "top",
					visible: true,
				}}
				onAfterChange={(x) => dispatchYear(change(x))}
			/>
		</div>
		<div className="playerNames">
			<span className="nameTitle">Add player names:</span>

			<input
				placeholder="Player1's name"
				className="inputName"
				onChange={(event) => dispatchName(name(event.target.value))}
			/>

			<input
				placeholder="Player2's name"
				className="inputName"
				onChange={(event) => dispatchName(name2(event.target.value))}
			/>
		</div>
		<div className="divButtonCreate">
			<Link
				to="/gameBoard"
				className="startGameButton"
				onClick={() => getYearSpan()}
			>
				{" "}
				Start game{" "}
			</Link>
			<Link className="rulesCreate" to="/rules">
				<img className="createRulesIMG" src={rules}></img>
				<p className="createRulesP">How to play</p>
			</Link>
		</div>
	</div>
);
