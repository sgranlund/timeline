import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

export const CreateGameView = ({
  onNumPlayers,
  onSliderChange
}) => (
  <div>
    <div className="createGame">
      <span>Create Game</span>
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
            visible: true
          }}
          onChange={onSliderChange}
        />
    </div>
    <div className="settings">
      <div className="players">
        <select onChange={(event) => onNumPlayers(event.target.value)}>
          <option value="2">2 players</option>
          <option value="3">3 players</option>
          <option value="4">4 players</option>
        </select>
      </div>
      <div className="gameSettings">
      </div>
    </div>
    <div className="startGame">
      <button>Start!</button>
    </div>
  </div>
);
