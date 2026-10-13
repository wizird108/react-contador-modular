import React, { useState } from 'react';

// El componente principal del contador.
function Contador() {
  // Usamos el hook useState para crear una variable de estado 'count'.
  const [count, setCount] = useState<number>(0);

  // Función para incrementar el contador.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Función para decrementar el contador.
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="contador-container">
      <h1>Contador Interactivo</h1>
      <p className="contador-valor">{count}</p>
      <div className="contador-botones">
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
      </div>
    </div>
  );
}

export default Contador;



