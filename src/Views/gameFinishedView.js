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
            <span>Congratulations</span>
        </div>
        <div className="result">
            <span className="resultTitle"></span>
            <span className="theWinner">{countWinner()}</span>
            <span className="winnerIs">you won!</span>
        </div>
        <div className="newGameButton">
            <a href="/createGame" className="newButton" >
                New game
            </a>
        </div>
    </div>
)