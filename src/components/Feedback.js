import React from 'react'
import {useState} from 'react'

function Feedback() {

  const Myarray = [
    {
      quote: ' lorem10  Well, Ted, like I said the last time happen again ',
    },
    {
      quote: ' lorem120hf jdksj jfklds kljfkldsa  Well, Ted, like I said the last time happen again ',
    },
    {
      quote: ' jfdks utieowut nvmc,, like I said the last time happen again ',
    }   
  ];


  const [index, setIndex] = useState(0) //Setting 1st quote as default

function changeQuote() {
  let newIndex = Math.floor(Math.random() * (Myarray.length -0) +0 ); //now on every click setting a random indexbetween 0 and quotes array length (quoates array length is excluded) 
setIndex(newIndex);
}

  return (
    <div className='quote-container'>
    <p>{Myarray[index].quote}</p>

    <button onClick={changeQuote}>Change</button>

    </div>
  )
}

export default Feedback