import React from "react";

function Feedback() {
  var quotes = [
    '"Me no se."\n',
    '"Qué hay que hacer?!"\n',
    '"Me no se."\n',
    '"Qué hay que hacer?!"\n',
  ];

  Math.floor(Math.random() * 4);
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[randomNumber];
  function newQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[randomNumber];
  }

  return (
    <div>
      <div className="quote">
        <blockquote className="text">
          <i id="quotes">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            impedit maiores quod explicabo quidem in blanditiis earum nostrum
            culpa eligendi.
          </i>
        </blockquote>
      </div>

      <footer class="footer">
        <button>
          <a class="btn" onclick="newQuote()">
            Next quote
          </a>
        </button>
      </footer>
    </div>
  );
}

export default Feedback;
