import { useState } from "react"


export default function List({cards, changeCardsPosition}) {


     return (
          <>
                  {cards.map((card, ) => (

              <li key={card.name} className="card" onClick={ () => changeCardsPosition(cards) }>
            setKey(card.name)
console.log(key)
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))}

          </>
     )
}