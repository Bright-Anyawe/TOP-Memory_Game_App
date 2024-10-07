

function ScoreBoard({count}) {
    let bestScore = 0;
    
function handleBestScore() {
    if(count >= 0) {
        bestScore += 1
    }

}
    return (
        <>
           <div >
          <h2>Score:{count} </h2>
          <h3>Best Score: {bestScore} </h3>
        </div> 
        </>
    )
}

export default ScoreBoard