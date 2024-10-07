import { useState } from "react";
import Card from "./Cards";
import ScoreBoard from "./ScoreBoard";

export default function MemoryApp() {
 const [score, setScore] = useState(0)
 const [bestScore, setBestScore] = useState(0)


  function incrementScore() {
        setScore(score + 1)

  }
  
  function setScoreToZero() {
    setScore(0)
  }


  
  function hadn() {
    setScore(0)
  }


  return (
    <main>
      <header>
       <div> 
        <h1>Avengers Memory Game</h1>
        <h3>
          Improve your score by clicking on an image <span>Note</span>!
          Don&apos;t click on an image more than once
        </h3></div>

       <ScoreBoard score={score} bestScore={bestScore} />
      </header>


      <section className="cardsContainer">
      <Card incrementScore={incrementScore} setScoreToZero={setScoreToZero} setBestScore={setBestScore} />
      </section>
    </main>
  );
}
