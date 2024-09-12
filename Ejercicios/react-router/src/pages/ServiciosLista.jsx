import { Link } from "react-router-dom";

export const ServiciosLista = ({ servicios }) => {
  return (
    <div>
      <h1>ServiciosLista</h1>
      <ul>
        {servicios.map((servicio) => (
          <li key={servicio.id}>
            <Link to={`/servicios/${servicio.id}`}>
              {servicio.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
