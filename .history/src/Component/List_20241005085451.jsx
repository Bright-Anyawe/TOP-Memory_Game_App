

export default function List({cards, changeCardsPosition}) {


     return (
          <>
                  {cards.map((card, index) => (

              <li key={card.name} className="card" onClick={ () => changeCardsPosition(cards, ind ex, 4) }>
            
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))}

          </>
     )
}