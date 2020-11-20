export const CreateGameView = ({ 
    onNumPlayers, 
    onStartYear, 
    onEndYear, 
    startYear, 
    endYear, 
    onName }) => (
    <div>
        <div className="createGame">
            <span>Create Game</span>
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
                <span>Game name:</span>
                <input onChange={(event)=>onName(event.target.value)}></input>
                <div className="range">
                    <label>Year 1500</label>
                    <input onChange={(event) => onStartYear(event.target.value)} 
                            type="range" min="1500" max="2020"></input>
                    <label>Year 2020</label>
                    <label>Year 1500</label>
                    <input onChange={(event) => onEndYear(event.target.value)} 
                            type="range" min="1500" max="2020"></input>
                    <label>Year 2020</label>
                </div>
                <div>
                    <span>From:</span>
                    {startYear()}
                    <span>To:</span>
                    {endYear()}
                </div>
            </div>
        </div>
        <div className="startGame">
            <button>Start!</button>
        </div>
    </div>
)