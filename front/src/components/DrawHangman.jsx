import React from 'react';
import hangman from "../assets/hangman.png";

export const DrawHangman = ({errors}) => {

  return (
    <div className="hangman-container">
      <div className="potence">
        <img src={hangman} alt="" />
      </div>
      <div className="bonhomme">
        {errors > 0 && <div className="head" />}
        {errors > 1 && <div className="body" />}
        {errors > 2 && <div className="arm left" />}
        {errors > 3 && <div className="arm right" />}
        {errors > 4 && <div className="leg left" />}
        {errors > 5 && <div className="leg right" />}
      </div>
    </div>
  );
};