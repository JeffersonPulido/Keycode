import './App.css'
import { MyPage } from './components/MyPage'
import { MyPageContext } from './components/MyPageContext'

function App() {

  return (
    <>
      <h1>App SIN context</h1>
      <MyPage/>
      <hr />
      <h1>App CON context</h1>
      <MyPageContext/>
    </>
  )
}

export default App
