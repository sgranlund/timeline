export const LandingPageView = ({onText}) => (
    <div className="landing">
        <div className="title">
            <span>Timeline</span>
        </div>
        <div className="buttons">
            <div className="continue">
                <button>Continue Game</button>
                <div className="gameName">
                    <span>Enter game name:</span>
                    <input onChange={(event) => onText(event.target.value)}></input>
                </div>
            </div>
            <div className="new">
                <button>New Game</button>
            </div>
        </div>
    </div>
)
