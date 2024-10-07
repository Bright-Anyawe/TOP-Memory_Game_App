import { useEffect, useState } from "react";

function Card({setCount, count}) {
  const [cards, setCards] = useState([
    { url: "", name: "Spiderman" },
    { url: "", name: "Captain marvel" },
    { url: "", name: "Black Panther" },
    { url: "", name: "Doctor Strange" },
    { url: "", name: "Iron Man" },
    { url: "", name: "Thor" },
    { url: "", name: "Thanos" },
    { url: "", name: "Xmen" },
  ]);

  useEffect(() => {
    async function fetchData() {
      const request1 = fetch(
        "https://api.giphy.com/v1/stickers/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=spiderman",
        { mode: "cors" }
      );
      const request2 = fetch(
        "https://api.giphy.com/v1/stickers/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=captain%20Marvel",
        { mode: "cors" }
      );
      const request3 = fetch(
        "https://api.giphy.com/v1/stickers/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=Black%20Panther",
        { mode: "cors" }
      );
      const request4 = fetch(
        "https://api.giphy.com/v1/stickers/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=Doctor%20Strange",
        { mode: "cors" }
      );
      const request5 = fetch(
        "https://api.giphy.com/v1/stickers/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=Iron%20Man",
        { mode: "cors" }
      );
      const request6 = fetch(
        "https://api.giphy.com/v1/stickers/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=Thor",
        { mode: "cors" }
      );
      const request7 = fetch(
        "https://api.giphy.com/v1/stickers/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=Thanos",
        { mode: "cors" }
      );
      const request8 = fetch(
        "https://api.giphy.com/v1/stickers/translate?api_key=xUGeBWKikoUF1sOZRB6a37IK2KhrYt3e&s=Carol%20Danver",
        { mode: "cors" }
      );
      try {
        const response = await Promise.all([
          request1,
          request2,
          request3,
          request4,
          request5,
          request6,
          request7,
          request8,
        ]);
        console.log(response);
        const responseJson = response.map((data) => data.json());

        const awaitJson = await Promise.all(responseJson);
        console.log(awaitJson);
        const imageUrl = awaitJson.map((data) => data.data.images.original.url);
        console.log(imageUrl);

        // const imageUrl = data.data.images.original.url;

        setCards((prevCards) =>
          prevCards.map((card, index) => ({
            ...card,
            url: imageUrl[index] || card,
          }))
        );
        console.log(imageUrl);
      } catch (error) {
        console.log("No found");
      }
    }
    fetchData();
  }, []);

  // function handleClick(card) {
  //   setCount(count + 1)

  //   console.log(`${count} has been read`)
  // }

  function changeCardsPosition(e) {
    setCards( (cards) => ([...cards].sort(() => Math.random() - 0.5)))
    setCount(count + 1)

     


  }



  return (
      <ul>
     {cards.map((card ) => (
                   <li key={card.name} className="card" onClick={changeCardsPosition }>
                    {/* <h1> {key} </h1> */}
            <img src={card.url} alt={card.name} />
            <h2> {card.name} </h2>
          </li>
                  ))} </ul>
  );
}

export default Card;
