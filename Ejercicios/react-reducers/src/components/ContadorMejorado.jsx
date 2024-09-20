import React, { useReducer } from "react";
import { contadorReducer, valorInicial } from "../reducers/contadorReducer";
import { Types } from "../actions/contadorActions";

export const ContadorMejorado = () => {
  const [state, dispatch] = useReducer(contadorReducer, valorInicial);

  const sumar = () => dispatch({ type: Types.INCREMENTAR });
  const restar = () => dispatch({ type: Types.DECREMENTAR });
  /** La variable payload se usa en la logica interna Cuando despacho la action */
  const sumar5 = () => dispatch({ type: Types.INCREMENTAR5, payload: 10 });
  const restar5 = () => dispatch({ type: Types.DECREMENTAR5, payload: 5 });

  return (
    <div>
      <button onClick={restar}>- 1</button>
      <button onClick={restar5}>- 5</button>
      {/* Mostrar el valor del state en la pantalla */}
      <h1>{state.contador}</h1>
      <button onClick={sumar}>+ 1</button>
      <button onClick={sumar5}>+ 5</button>
    </div>
  );
};
