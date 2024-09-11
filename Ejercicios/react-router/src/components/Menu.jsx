import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    // Componente Nav por semantica
    <nav className="menu">
        {/* Componente NavLink que es lo equivalente a la etiqueta <a> de html */}
        {/* isActive me permite saber por medio de un booleano si el usuario esta en esa URL, para hacer alguna accion, en este caso, pintar un estilo especifico */}
        {/* to={} es la ruta a la cual quiero que al dar clic, se dirija */}
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/acerca"}
      >
        Acerca
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/productos"}
      >
        Productos
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : null)}
        to={"/servicios"}
      >
        Servicios
      </NavLink>
    </nav>
  );
};

export default Menu;
