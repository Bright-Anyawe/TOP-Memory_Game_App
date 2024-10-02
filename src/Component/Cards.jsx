import { useEffect,useState } from "react";

 function Card() {
const [cards, setCards] = useState([
{ url:'' , name: "Spiderman" },
{ url: '', name: "Captain marvel" },
])

 useEffect(() =>
     async function fetchData() {
    try {
    const response = await fetch(
      `https://api.giphy.com/v1/stickers/translate?api_key=YHyp3X5OPOHuZhRgn8zONNYacPGXk21P&s=spiderman
`,
{ mode: "cors" }
);
console.log(response)



    const data = await response.json();
    console.log(data);

    const imageUrl = data.images.url

        setCards((prevCards) => prevCards.map((card, index) => index === 0? {...card, url: imageUrl} : card)  )
    console.log(imageUrl)

} catch (error) {
    console.log('No found');


  }

         fetchData()

})




return (
  <>
   { cards.map((card) =>
    
      <ul key={card.name}>
        <img src={card.url} alt={card.name} />
      </ul>
    
    )}
  </>
);
}

export default Card