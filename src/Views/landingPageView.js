import abra from "../images/abra.jpg";
import berlin from "../images/berlinmuren.jpg";
import caesar from "../images/caesar.jpg";
import hendrix from "../images/hendrix.jpeg";
import iphone from "../images/iphone.jpg";
import pyramid from "../images/pyramid.jpg";

export const LandingPageView = ({ onText, onKey }) => (
  <div className="landing">
    <div className="topRow">
      <div>
        <img src={abra} alt="abra"></img>
      </div>
      <div>
        <img src={berlin} alt="berlin"></img>
      </div>
      <div>
        <img src={caesar} alt="caesar"></img>
      </div>
    </div>
    <div className="title">
      <span>Timeline</span>
    </div>
    <div className="botRow">
      <div>
        <img src={hendrix} alt="hendrix"></img>
      </div>
      <div>
        <img src={iphone} alt="iphone"></img>
      </div>
      <div>
        <img src={pyramid} alt="pyramid"></img>
      </div>
    </div>
    <div className="buttons">
      <div className="continue">
        <button>Continue Game</button>
        <div className="gameName">
          <span>Enter game name:</span>
          <input
            onChange={(event) => onText(event.target.value)}
            onKeyPress={(event) => onKey(event)}
          ></input>
        </div>
      </div>
      <div className="new">
        <button>New Game</button>
      </div>
    </div>
  </div>
);
