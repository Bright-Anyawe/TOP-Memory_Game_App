

export default function List({cards}) {


     return (
          <>
                  {cards.map((card) => (

              <li key={card.name} className="card" onClick={ }>
            
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))}

          </>
     )
}