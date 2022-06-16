import React, { Component, useState } from "react";
const App = ({ slides }) => {
  const [slide, setSlide] = useState(1);
  const sizeArr = slides.length;
  const nextHandler = () => {
    setSlide((prev) => prev + 1);
  };
  const prevHandler = () => {
    setSlide((prev) => prev - 1);
  };
  const restartHandler = () => {
    setSlide(1);
  };
  return (
    <div>
      <h1 data-testid="title">{slides[slide - 1].title}</h1>
      <p data-testid="text">{slides[slide - 1].text}</p>
      <button
        data-testid="button-next"
        onClick={nextHandler}
        disabled={slide === sizeArr ? true : false}
      >
        Next
      </button>
      <button
        data-testid="button-prev"
        onClick={prevHandler}
        disabled={slide - 1 > 0 ? false : true}
      >
        Prev
      </button>
      <button
        data-testid="button-restart"
        onClick={restartHandler}
        disabled={slide - 1 > 0 ? false : true}
      >
        Restart
      </button>
    </div>
  );
};
export default App;
