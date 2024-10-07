import { useState } from "react";
import Card from "./Cards";
import ScoreBoard from "./ScoreBoard";

export default function MemoryApp() {
 const [score, setScore] = useState(0)
 const [bestScore, setBestScore] = useState(0)
 const [renderMessage, setRenderMessage] = useState('')


  function incrementScore() {
        setScore(score + 1)

  }
  
  function setScoreToZero() {
    setScore(0)
  }


  
  function handleBestScore() {
    setBestScore(score)
  }

  function handleRenderMessage() {
    setRenderMessage('oops! try again')
  }

  return (
    <main>
      <header>
       <div className="gameTitleContainer"> 
        <h1>Avengers Memory Game</h1>
    <em>
          <h3>
          Improve your score by clicking on an image <span>Note</span>!
          Don&apos;t click on the same image more than once
        </h3>
        <span>{renderMessage}</span>
    </em>
        </div>

       <ScoreBoard score={score} bestScore={bestScore} />
{/* {renderScoreBoard, scoreNum: score, bestScoreNum: bestScore} */}
      </header>


      <section className="cardsContainer">
      <Card incrementScore={incrementScore} setScoreToZero={setScoreToZero} handleBestScore={handleBestScore} handleRenderMessage={handleRenderMessage} />
      </section>
    </main>
  );
}
