

export default function List({cards, changeCardsPosition}) {

     
  function changeCardsPosition( cards) {

  setCards( (cards) => ([...cards].sort(() => Math.random() - 0.5)))

     
  }

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