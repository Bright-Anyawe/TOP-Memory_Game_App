

function ScoreBoard({score, bestScore}) {
    

    function handleBestScoreDisplay() {
        const bestScoreContainer = document.querySelector('.bestScoreContainer')

bestScoreContainer.style.display === 'none'? bestScoreContainer.style.display = 'block': bestScoreContainer.style.display = 'none';

    }

    return (
        <>
           <div id="scoreBoardContainer">
          <h2>Score:{score} </h2>
          <div className="bestScoreContainer">
            <h3>Best Score: {bestScore} </h3>
          </div>
        </div> 
        </>
    )
}

export default ScoreBoard