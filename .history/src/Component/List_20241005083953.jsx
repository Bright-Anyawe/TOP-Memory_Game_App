

export default function List({cards, changeCardsPosition}) {


     return (
          <>
                  {cards.map((card) => (

              <li key={card.name} className="card" onClick={changeCardsPosition(3,) }>
            
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))}

          </>
     )
}