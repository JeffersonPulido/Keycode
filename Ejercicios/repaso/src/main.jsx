import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Tarjeta from "./components/Tarjeta.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tarjeta apellido="Pulido" nombre="Jefferson" edad={21} genero />
    <Tarjeta nombre="Laura" apellido="Vargas" edad={21} />
    <Tarjeta nombre="Angela" apellido="Rosero" edad={21} />
    <Tarjeta nombre="Leslye" apellido="Moreno" edad={21} />
    <Tarjeta />

    <App />
  </StrictMode>
);
