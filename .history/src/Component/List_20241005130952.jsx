

export default function List({cards, setCards }) {

     
  function changeCardsPosition( ) {

  setCards( (cards) => ([...cards].sort(() => Math.random() - 0.5)))

     
  }

     return (
          <>
                  {cards.map((card ) => (
console.
              <li key={card.name} className="card" onClick={changeCardsPosition }>
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))}

          </>
     )
}