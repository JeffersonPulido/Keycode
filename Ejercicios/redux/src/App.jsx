import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import UserList from "./components/UserList";

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
      <hr />
      <h1 className="mt-2 text-2xl text-center text-white">
        Administrador de Usuarios
      </h1>
      {/* Componente para agregar usuarios */}
      <div className="justify-center m-auto">
        <UserList/>
      </div>
    </div>
  );
}

export default App;
