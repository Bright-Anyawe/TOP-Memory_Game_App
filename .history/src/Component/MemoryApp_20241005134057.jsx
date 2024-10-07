import Card from "./Cards";

export default function MemoryApp() {
 

  return (
    <main>
      <header>
       <div> 
        <h1>Avengers Memory Game</h1>
        <h3>
          Improve your score by clicking on an image <span>Note</span>!
          Don&apos;t click on an image more than once
        </h3></div>

        <div>Score: </div>
      </header>


      <section className="cardsContainer">
        <Card />
      </section>
    </main>
  );
}
