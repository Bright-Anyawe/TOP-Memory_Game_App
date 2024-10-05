

export default function List({cards}) {


     return (
          <>
              <li key={card.name} className="card" onClick={(fromIndex, toIndex) =>{
//             function moveElement(arr, fromIndex, toIndex) {
//     return arr.map((item, index) => {
//         if (index === toIndex) return arr[fromIndex];
//         if (index === fromIndex) return arr[toIndex];
//         return item;
//     });
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(moveElement(arr, 3, 1)); 
             
            return cards.map((card, index) => { 
if(index === toIndex) return cards[fromIndex];
if(index === fromIndex) return cards(toIndex);
return card
            })
             } }>
            
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
          </>
     )
}