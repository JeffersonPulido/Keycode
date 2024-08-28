import { useEffect, useState } from "react";

export const useContador = () => {
  const title = "Vite + React";
  const [contador1, setContador1] = useState(0);
  const [contador5, setContador5] = useState(0);

  useEffect(() => {
    setContador5(contador1);
  }, [contador1]);

  const restarContador = (actualizar, leer, numero) => {
    actualizar(leer - numero);
  };

  const sumarContador = (actualizar, leer, numero) => {
    actualizar(leer + numero);
  };

  return {
    title,
    contador1,
    contador5,
    restarContador,
    sumarContador,
    setContador1,
    setContador5,
  };
};
