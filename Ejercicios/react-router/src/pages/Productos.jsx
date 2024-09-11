import { Link } from "react-router-dom";

export const Productos = ({ productos }) => {
  return (
    <div>
      Productos
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre} - $ {producto.precio}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
