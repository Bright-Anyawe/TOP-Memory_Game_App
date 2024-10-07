

function ScoreBoard({score, bestScore}) {
  

    return (
        <>
           <div id="scoreBoardContainer">
          <h2>Score:{score} </h2>
            <h3>Best Score: {bestScore} </h3>
        </div> 
        </>
    )
}

export default ScoreBoard