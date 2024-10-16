import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  updateUser,
} from "../redux/userManagment/actions";

const UserList = () => {
  //Llamar al hook de reaxct reduz y disparar alguna accion
  const dispatch = useDispatch();
  //Obtener informacion del estado de usuarios
  const { users } = useSelector((state) => state.users);
  //useState para guardar el nombre
  const [username, setUsername] = useState("");
  //useState para guardar el id del usuario que queremos editar
  const [editUserId, setEditUserId] = useState(null);

  //Funcion para agregar un usuario
  const handleAddUser = () => {
    //Quitar espacios
    if (username.trim()) {
      //Creacion del usuario a guardar
      const newUser = { id: Date.now(), name: username };
      //Se usa el objeto creado antes y se dispara la accion
      dispatch(addUser(newUser));
      //Se reinicia el contenido del nombre
      setUsername("");
    }
  };

  //Funcion para editar (guarda el id del usuario y el nombre en los useState)
  const handleEditUser = (user) => {
    setEditUserId(user.id);
    setUsername(user.name);
  };

  //Funcion para actualizar el usuario
  const handleUpdateUser = () => {
    //Evita espacios en blanco
    if (username.trim()) {
      //Dispara la accion de editar usuario usando el id que elegi y el nuevo nombre
      dispatch(updateUser({ id: editUserId, name: username }));
      //Setea el id de usuario a null ya que fue actualizado ya
      setEditUserId(null);
      //Setea el nombre de usuario a '' ya que fue actualizado ya
      setUsername("");
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Nombre del usuario..."
        className="p-2 mr-2 text-white border rounded"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {/* Condicional ternario que muestra dinamicamente un boton de ACTUALIZAR si tiene contenido la variable editUserId,
       * sino tiene contenido, muestra el boton de AGREGAR
       */}
      {editUserId ? (
        <button
          onClick={handleUpdateUser}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-800"
        >
          Actualizar usuario
        </button>
      ) : (
        <button
          onClick={handleAddUser}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-800"
        >
          Agregar usuario
        </button>
      )}
      <ul className="mt-4">
        {/* Recorre todo el contenido de la variable users y muestra lo que este adentro de los () */}
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between flex-1 p-2 mb-2 text-white border border-white"
          >
            {user.name}
            <button
              //onClick que ejecuta la funcin de seteo de datos del usuario a actualizar, pasando todo el objeto user
              onClick={() => handleEditUser(user)}
              className="px-4 ml-4 font-bold text-white bg-green-600 rounded"
            >
              Editar
            </button>
            <button
              //onClick que ejecuta el dispatch con la accion de eliminar, pasando el id
              onClick={() => dispatch(deleteUser(user.id))}
              className="px-4 ml-4 font-bold text-white bg-red-600 rounded"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
