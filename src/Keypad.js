// Keypad.js
import React from 'react';
import './styles/Keypad.css';

function Keypad({ handleClick }) {
  const buttons = [
    'C', '/', '*', '-', // Primera fila
    '7', '8', '9', '+', // Segona fila
    '4', '5', '6', '=', // Tercera fila
    '1', '2', '3', '.', // Quarta fila
    '0',                // Cinquena fila
  ];

  return (
    <div className="keypad">
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => handleClick(btn)}
          className={btn === '0' ? 'expand' : ''} // Assigna la classe "expand" al botó "0"
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Keypad;