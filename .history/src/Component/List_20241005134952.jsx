import { useState } from "react"

export default function useList({cards, setCards }) {
const [count, setCount] = useState(0)
     
  function changeCardsPosition( ) {
setCount(count + 1)
  setCards( (cards) => ([...cards].sort(() => Math.random() - 0.5)))

     
  }


     return{
          
         rendder (
          <>
                  {cards.map((card ) => (
                   <li key={card.name} className="card" onClick={changeCardsPosition }>
                    {/* <h1> {key} </h1> */}
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))}

          </>}
     )
}