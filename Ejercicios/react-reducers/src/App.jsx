import './App.css'
import { Contador } from './components/Contador'
import { ContadorMejorado } from './components/ContadorMejorado'

function App() {
  return (
    <>
      <h1>useReducer</h1>
      <p>Sin Reducers</p>
      <Contador/>
      <p>Con Reducers</p>
      <ContadorMejorado/>
    </>
  )
}

export default App
