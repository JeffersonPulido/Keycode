import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Archivo de barril que contiene todas mis paginas */
import {
  Acerca,
  Error404,
  Home,
  Productos,
  ProductosDetalle,
  Servicios,
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
          <Route path="/servicios" element={<Servicios />} />
          {/* Ruta de error */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
