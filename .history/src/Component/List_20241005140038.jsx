import { useState } from "react"

export default function useList({cards, setCards }) {
const [count, setCount] = useState(0)
     
  function changeCardsPosition( ) {
setCount(count + 1)
  setCards( (cards) => ([...cards].sort(() => Math.random() - 0.5)))

     
  }


     returnz
     )
}