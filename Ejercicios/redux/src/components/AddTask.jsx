import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = () => {
  //Hace la solicitud al reducer de hacer la action addTask
  const dispatch = useDispatch();
  //State para guardar la tarea
  const [taskName, setTaskName] = useState("");

  //Funcion que usa el dispatch
  const createTask = () => {
    // Funcion de js para quitar espacios en blanco al principio y final
    if (taskName.trim()) {
      //Se envia el json como payload al reducer para modificar el state
      dispatch(addTask({ id: Date.now(), name: taskName, completed: false }));
      setTaskName("");
    }
  };

  return (
    <div className="my-4">
      <input
        type="text"
        value={taskName}
        placeholder="Agrega aqui tu tarea..."
        onChange={(e) => setTaskName(e.target.value)}
        className="p-2 mr-2 text-white border rounded"
      />
      <button className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-800' onClick={createTask}>Agregar</button>
    </div>
  );
};

export default AddTask;
