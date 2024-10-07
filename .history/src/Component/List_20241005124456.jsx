import { useState } from "react"

const [key, setKey] = useState(null)

export default function List({cards, changeCardsPosition}) {


     return (
          <>
                  {cards.map((card, ) => (

              <li key={card.name} className="card" onClick={ () => changeCardsPosition(cards) }>
            
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))}

          </>
     )
}