import { change } from "../actions";
import { name } from "../actions";
import { name2 } from "../actions";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Link } from "react-router-dom";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export const CreateGameView = ({
	dispatchYear,
	dispatchName,
	model,
	startYear,
	endYear,
}) => (
	<div>
		<div id="stars"></div>
		<div id="stars2"></div>
		<div id="stars3"></div>
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
					visible: true
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
		<div className="divButton">
			<Link
				to="/gameBoard"
				className="backButton"
				onClick={() => model.getApiData(startYear, endYear)}
			>
				{" "}
				Start game{" "}
			</Link>
		</div>
	</div>
);
