'use client';

// Keyboard.js

import React, { useState } from 'react';
import './styles.css';

const Keyboard = ({ onSelectLetter, motAleatoire }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const [disabledLetters, setDisabledLetters] = useState([]);

  const handleClick = (letter) => {
    if (!disabledLetters.includes(letter)) {
      onSelectLetter(letter);
      setDisabledLetters([...disabledLetters, letter]);
    }
  };

  return (
    <div className="keyboard-container">
      {alphabet.split('').map((letter, index) => (
        <button
          key={index}
          onClick={() => handleClick(letter)}
          disabled={disabledLetters.includes(letter)}
          className="keyboard-button"
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
