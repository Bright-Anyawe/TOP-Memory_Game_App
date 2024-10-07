import { useState } from "react"

export default function List({cards, setCards }) {
const [count, setC]
     
  function changeCardsPosition( ) {

  setCards( (cards) => ([...cards].sort(() => Math.random() - 0.5)))

     
  }

     return (
          <>
                  {cards.map((card ) => (
                   <li key={card.name} className="card" onClick={changeCardsPosition }>
                    {/* <h1> {key} </h1> */}
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))}

          </>
     )
}