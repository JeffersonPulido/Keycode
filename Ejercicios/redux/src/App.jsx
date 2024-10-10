import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <h1>Administrador de Tareas</h1>
      {/* Componente para agregar tareas */}
      <AddTask/>
      <TaskList/>
    </>
  )
}

export default App
