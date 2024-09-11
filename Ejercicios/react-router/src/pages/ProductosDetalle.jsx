import { useParams, useNavigate } from "react-router-dom";

export const ProductosDetalle = ({ productos }) => {
  /** Uso lo que importe para navegar a algun sitio */
  const navegador = useNavigate();
  /** Busca en la URL el parametro que asigne en la ruta Ej. /productos/:id por ende, busca y encuentra /productos/1 y me guarda el 1 */
  const { id } = useParams();
  /** Crea un filtro buscando el id dentro de los productos totales y me regresa el que encontro */
  const infoProducto = productos.find(
    /** Compara el id que encontro en la URL contra el id del producto de la lista general, convirtiendolo antes en string */
    (producto) => producto.id.toString() === id
  );
  /** Redirigir a la pagina anterior usando la navegacion que importe*/
  const funcionNavegar = () => {
    navegador(-1);
  };

  return (
    <section>
      <h1>Detalle del producto:</h1>
      <h2>Producto: {infoProducto.nombre}</h2>
      <h3>Precio: $ {infoProducto.precio}</h3>
      <button onClick={funcionNavegar}>Regresar</button>
    </section>
  );
};
