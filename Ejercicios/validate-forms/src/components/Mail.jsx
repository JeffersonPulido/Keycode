import React from "react";

/**
 * 
 * datos viene en una estructura por capas asi:
 * {
 *  datos: {
 *        nombre: '',
 *        asunto: '',
 *        ...
 *    }
 * }
 * 
 * Entonces para acceder, primero accedemos al segundo nivel del objeto = { datos } y despues
 * desestructuramos el ultimo nivel del objeto
 */

const Mail = ({ datos }) => {
  //Desestructuramos la informacion del form y le ponemos valores iniciales
  const { nombre = '', asunto = '', email = '', observaciones = '' } = datos

  return (
    <div className="email-container">
      <div className="email-header">
        <h2>{asunto}</h2>
        <p className="email-from">
          De:{" "}
          <span>
            {nombre} - ({email})
          </span>
        </p>
      </div>
      <div className="email-body">
        <p>{observaciones}</p>
      </div>
    </div>
  );
};

export default Mail;
