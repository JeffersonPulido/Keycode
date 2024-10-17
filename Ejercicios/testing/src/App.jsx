
import './App.css'
// import { sum } from './utils/sum'
import Counter from './components/Counter'

function App() {
  
  // const handleSum = (a, b) => {
  //   const respuesta = sum(a, b)
  //   console.log("Respuesta: ", respuesta)
  // }

  return (
    <>
      
      <h1 testid='h1'>Jest Testing</h1>
      {/* <button onClick={() => handleSum(5, 5)}>Sumar</button> */}
      <hr />
      <Counter/>
    </>
  )
}

export default App
