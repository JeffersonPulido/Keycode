import { useState, useEffect } from "react";

const User = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  //Convertimos nuestra funcion en asincrona
  const obtenerUsuarios = async () => {
    try {
      //Esperamos que la API responda para poder continuar
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      //Si la respuesta no es OK obligo que genere un error
      if (!respuesta.ok) {
        throw new Error(`Error en la API: ${respuesta.status}`);
      }
      //Esperamos a poder convertir la respuesta en json para continuar
      const data = await respuesta.json();
      setUsuarios(data);
      setCargando(false);
    } catch (error) {
      //Aqui esta el codigo por si ocurre un error
      setError(error.message);
      console.error("Hubo un error al obtener los usuarios:", error);
    } finally {
      setCargando(false); // Nos aseguramos de detener la carga, incluso si hay un error
    }
  };

  //Ejecuta esto una unica vez apenas carga la pagina
  useEffect(() => {
    obtenerUsuarios();
  }, []);

  //Ejecuta esto si aun no hay informacion
  if (cargando) {
    return <p>Cargando...</p>;
  }

  //Ejecuta esto si ocurrio un error
  if (error) {
    return <p>Error: {error}</p>;
  }

  //Ejecuta esto si ya no esta cargando y nuestro proceso de obtener usuarios fue satisfactorio
  return (
    <div>
      <h1>Lista de usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
