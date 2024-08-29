import { useState } from "react";
import { SelectList } from "./SelectList";

export const Selects = () => {
  //Creamos un estado para almacenar departamentos y municipios
  const [departamentos, setDepartamentos] = useState("");
  const [municipios, setMunicipios] = useState("");

  console.log("Departamento ID", departamentos);
  console.log("Municipio ID", municipios);

  return (
    <div className="container">
      {/* Llamamos el componente personalizado que despliega el listado de departamentos que nos retorna la api */}
      {/* Por medio de los manejadorCambio, leemos el value del option que hayamos seleccionado, y este lo guardamos en el estado correspondiente */}
      <SelectList
        title="Departamentos"
        url="https://api-colombia.com/api/v1/Department"
        manejadorCambio={(event) => {
          setDepartamentos(event.target.value);
        }}
      />
      {/* Llamamos el componente personalizado que despliega el listado de municipios que nos retorna la api segun el departamento que elegimos */}
      <SelectList
        title="Municipios"
        url={`https://api-colombia.com/api/v1/Department/${departamentos}/cities`}
        manejadorCambio={(event) => {
          setMunicipios(event.target.value);
        }}
      />
      {/* // Imprimir info del municipio */}
    </div>
  );
};
