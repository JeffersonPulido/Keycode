import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="flex flex-col p-5 m-5">
      <h1 className="text-2xl text-center text-white">
        Administrador de Tareas
      </h1>
      {/* Componente para agregar tareas */}
      <div className="justify-center m-auto">
        <AddTask />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
