import { useParams } from "react-router-dom";

export const ServiciosDetalle = ({ servicios }) => {
  /** Busca en la URL el parametro que asigne en la ruta Ej. /servicios/:id por ende, busca y encuentra /servicios/1 y me guarda el 1 */
  const { id } = useParams();
  /** Crea un filtro buscando el id dentro de los servicios totales y me regresa el que encontro */
  const infoServicio = servicios.find(
    /** Compara el id que encontro en la URL contra el id del servicio de la lista general, convirtiendolo antes en string */
    (servicio) => servicio.id.toString() === id
  );

  return (
    <section>
      <h1>Detalle del servicio:</h1>
      <h2>Servicio: {infoServicio.nombre}</h2>
      <h3>Precio: $ {infoServicio.precio}</h3>
    </section>
  );
};
