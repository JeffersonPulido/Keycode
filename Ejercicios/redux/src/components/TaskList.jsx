import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions";

const TaskList = () => {
  //Busca todas las tareas que existan en Redux (global state / store)
  const tasks = useSelector((state) => state.tasks);
  //Hace la solicitud al reducer de hacer las actiones que se le pasen
  const dispatch = useDispatch();
  //Funcion para realizar la solicitud por medio del dispatch de elminar la tarea que corresponda al ID que le paso
  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  //Funcion para realizar la solicitud por medio del dispatch para actualizar la propiedad completed de la tarea que le paso
  const handleComplete = (task) => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`flex  cursor-pointer  items-center justify-between mb-2 border p-2 rounded ${
            task.completed ? "border-green-500" : "border-red-500"
          }`}
          onClick={() => handleComplete(task)}
        >
          <p className="flex-1 text-white">{task.name}</p>
          {/* <span>{task.completed ? 'Completado' : 'Pendiente'}</span> */}
          <button
            className="px-4 ml-4 font-bold text-white bg-red-600 rounded"
            onClick={() => handleDelete(task.id)}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
