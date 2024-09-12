import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Archivo de barril que contiene todas mis paginas */
import {
  Acerca,
  Error404,
  Home,
  Productos,
  ProductosDetalle,
  Servicios,
  ServiciosDetalle,
  ServiciosGarantias,
  ServiciosHome,
  ServiciosLista,
} from "./pages";
import Menu from "./components/Menu";
import "./App.css";
import { useState } from "react";

function App() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Carne",
      precio: 100,
    },
    {
      id: 2,
      nombre: "Cebolla",
      precio: 200,
    },
    {
      id: 3,
      nombre: "Pollo",
      precio: 300,
    },
    {
      id: 4,
      nombre: "Papa",
      precio: 400,
    },
  ]);

  const [servicios, setServicios] = useState([
    {
      id: 1,
      nombre: "Luz",
      precio: 100,
    },
    {
      id: 2,
      nombre: "Agua",
      precio: 200,
    },
    {
      id: 3,
      nombre: "Gas",
      precio: 300,
    }
  ]);

  return (
    <>
      {/* Enrutador general */}
      <BrowserRouter>
        <h1>Hola Mundo React Router Dom</h1>
        {/* Componente Menu */}
        <Menu />
        {/* Contenedor de rutas */}
        <Routes>
          {/* Rutas individuales */}
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          {/* Pagina de productos generales */}
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          />
          {/* Pagina individual del producto */}
          <Route
            path="/productos/:id"
            element={<ProductosDetalle productos={productos} />}
          />
          {/* Pagina general de servicios */}
          <Route path="/servicios" element={<Servicios />}>
            {/* Ruta inicial para la pagina de servicios /servicios/ */}
            <Route index element={<ServiciosHome />} />
            {/* Ruta de servcios de garantias /servicios/garantia */}
            <Route path="garantia" element={<ServiciosGarantias />} />
            {/* Ruta para la lista de servicios /servicios/lista */}
            <Route
              path="lista"
              element={<ServiciosLista servicios={servicios} />}
            />
            {/* Ruta individual del servicio /servicios/:id */}
            <Route
              path=":id"
              element={
                <>
                  <ServiciosLista servicios={servicios} />
                  <ServiciosDetalle servicios={servicios} />
                </>
              }
            />
          </Route>
          {/* Ruta de error */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
