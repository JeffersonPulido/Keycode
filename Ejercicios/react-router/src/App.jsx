import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Archivo de barril que contiene todas mis paginas */
import { Acerca, Error404, Home, Productos, Servicios } from "./pages";
import Menu from "./components/Menu";
import "./App.css";

function App() {
  return (
    <>
    {/* Enrutador general */}
      <BrowserRouter>
        <h1>Hola Mundo React Router Dom</h1>
        {/* Componente Menu */}
        <Menu/>
        {/* Contenedor de rutas */}
        <Routes>
          {/* Rutas individuales */}
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/servicios" element={<Servicios />} />
          {/* Ruta de error */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
