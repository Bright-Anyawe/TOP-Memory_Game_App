import { useState } from "react";
import useCard from "./Cards";
import ScoreBoard from "./ScoreBoard";

export default function MemoryApp() {
 const [count, renderCard] = useCard()

  return (
    <main>
      <header>
       <div> 
        <h1>Avengers Memory Game</h1>
        <h3>
          Improve your score by clicking on an image <span>Note</span>!
          Don&apos;t click on an image more than once
        </h3></div>

       <ScoreBoard count={count} />
      </header>


      <section className="cardsContainer">
        
        {renderCard}
      </section>
    </main>
  );
}
