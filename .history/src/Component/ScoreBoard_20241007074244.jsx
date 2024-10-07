

function ScoreBoard({score, bestScore}) {
    

    return (
        <>
           <div id="scoreBoardContainer">
          <h2>Score:{score} </h2>
          <div >
            <h3>Best Score: {bestScore} </h3>
          </div>
        </div> 
        </>
    )
}

export default ScoreBoard