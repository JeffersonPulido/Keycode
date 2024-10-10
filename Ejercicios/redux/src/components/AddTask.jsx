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
    <div>
      <input
        type="text"
        value={taskName}
        placeholder="Agrega aqui tu tarea..."
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={createTask}>Agregar</button>
    </div>
  );
};

export default AddTask;
