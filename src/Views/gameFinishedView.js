export const GameFinishedView = ({
    name1,
    name2,
    pointsPlay1,
    pointsPlay2,
    countWinner,
    newGame
}) => (
    <div className="gameFinish">
        <div className="gameFinishedTitle">
            <span>Game Finished</span>
        </div>
        <div className="result">
            <span className="resultTitle">Congratulations</span>
            <span>The winner is:</span>
            <span className="theWinner">{countWinner()}</span>
        </div>
        <div className="newGameButton">
            <a href="/createGame" className="backButton" >
                New game
            </a>
        </div>
    </div>
)