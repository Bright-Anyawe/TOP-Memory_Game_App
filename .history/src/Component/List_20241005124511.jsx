import { useState } from "react"


export default function List({cards, changeCardsPosition}) {
     const [key, setKey] = useState(null)


     return (
          <>
                  {cards.map((card, ) => (
set
              <li key={card.name} className="card" onClick={ () => changeCardsPosition(cards) }>
            
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))}

          </>
     )
}