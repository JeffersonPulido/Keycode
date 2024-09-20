import React, { useState } from "react";

export const Contador = () => {
  const [contador, setContador] = useState(0);
  const [contador5, setContador5] = useState(0);

  const sumar = (cantidad, setContador) => {
    setContador(contador + cantidad);
  };

  const restar = (cantidad, setContador) => {
    setContador(contador - cantidad);
  };

  return (
    <div>
      <button onClick={() => restar(1, setContador)}>- 1</button>
      <h1>{contador}</h1>
      <button onClick={() => sumar(1, setContador)}>+ 1</button>
      <hr />
      <button onClick={() => restar(5, setContador5)}>- 5</button>
      <h1>{contador5}</h1>
      <button onClick={() => sumar(5, setContador5)}>+ 5</button>
    </div>
  );
};
