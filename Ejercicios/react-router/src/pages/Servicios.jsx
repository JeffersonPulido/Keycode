import React from "react";
import { Outlet, Link } from "react-router-dom";

export const Servicios = () => {
  return (
    <div>
      Servicios
      <nav className="menu">
        <Link to={"/servicios"}>Inicio Servicios</Link>
        <Link to={"/servicios/garantia"}>Servicios Garantias</Link>
        <Link to={"/servicios/lista"}>Lista Servicios</Link>
      </nav>
      {/* Dentro de /servicios va a haber algo */}
      <Outlet />
    </div>
  );
};
