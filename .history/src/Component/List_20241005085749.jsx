

export default function List({cards, changeCardsPosition}) {


     return (
          <>
                  {cards.map((card, index) => (

              <li key={card.name} className="card" onClick={ () => changeCardsPosition(cards, index, (index+=1) %cards.length) }>
            
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))}

          </>
     )
}