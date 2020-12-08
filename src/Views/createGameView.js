import {increase} from "../actions"
import {name} from "../actions"
import {name2} from "../actions"
import Slider from 'rc-slider';
import { Link } from "react-router-dom"
import "rc-slider/assets/index.css";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export const CreateGameView = ({
  dispatchYear,
  dispatchName
}) => (
  <div>
    <div className="createGame">
      <span>Create Game</span>
    </div>
    <div className="timeRange">
      <span>Choose time range</span>
    </div>
    <div className="sliderArea">
        <Range
          defaultValue={[1000, 2020]}
          marks={{
            1000: `1000`,
            2020: `2020`
          }}
          min={1000}
          max={2020}
          tipFormatter={value => ` ${value}`}
          tipProps={{
            placement: "top",
          }}
          onChange={(x)=>dispatchYear(increase(x))}
        />
    </div>
    <div className="playerNames">
          <span className="nameTitle">Add player names:</span>
          <input onChange={(event)=>dispatchName(name(event.target.value))}/>
          <input onChange={(event)=>dispatchName(name2(event.target.value))}/>
    </div>
    <div className="divButton">
      {/* <a href="/gameBoard" className="backButton"> Start game </a> */}
      <Link to="/gameBoard" className="backButton"> Start game </Link>
    </div>
  </div>
);
