import React from "react";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function Feedback() {
  const Myarray = [
    {
      quote: " 'Desde la primera sesión, Mark ayudó a identificar tanto los problemas clave como las estrategias para abordarlos. Igualmente importante, he ayudado a poner los problemas en perspectiva, lo que los hizo sentir más manejables y también menos negativos en general.' ",
    },
    {
      quote:
        " lorem120hf jdksj jfklds kljfkldsa  Well, Ted, like I said the last time happen again ",
    },
    {
      quote: " jfdks utieowut nvmc,, like I said the last time happen again ",
    },
  ];

  const [index, setIndex] = useState(0); //Setting 1st quote as default

  function changeQuote() {
    let newIndex = Math.floor(Math.random() * (Myarray.length - 0) + 0); //now on every click setting a random indexbetween 0 and quotes array length (quoates array length is excluded)
    setIndex(newIndex);
  }

  return (
    <div className="quote-container">
      <IoIosArrowBack className="arrow-btn" onClick={changeQuote} />
      <p>{Myarray[index].quote}</p>
      <IoIosArrowForward className="arrow-btn" onClick={changeQuote}/>

    </div>
  );
}

export default Feedback;
