// App.js
import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import './styles/App.css';

function App() {
  // Estado para almacenar la entrada actual del usuario
  const [input, setInput] = useState('');

  // Funci�n que maneja los clics en los botones
  const handleClick = (value) => {
    if (value === 'C') {
      // Reinicia la entrada si se presiona 'C' (Clear)
      setInput('');
    } else if (value === '=') {
      try {
        // Eval�a la expresi�n ingresada y actualiza la entrada con el resultado
        setInput(eval(input).toString());
      } catch (error) {
        // Muestra 'Error' si la evaluaci�n falla
        setInput('Error');
      }
    } else {
      // Agrega el valor del bot�n presionado a la entrada actual
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      {/* Componente que muestra la entrada actual */}
      <Display input={input} />
      {/* Componente que contiene los botones de la calculadora */}
      <Keypad handleClick={handleClick} />
    </div>
  );
}

export default App;
