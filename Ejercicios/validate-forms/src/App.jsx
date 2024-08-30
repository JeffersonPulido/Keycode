import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'

function App() {
    return (
    <>
      <h1>Validate Forms</h1>
      <div className="card">
        <ContactForm/>
      </div>
    </>
  )
}

export default App
