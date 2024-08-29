import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import { Loader } from './components/Loader';

function App() {
    return (
    <>
      <h1>Validate Forms</h1>
      <div className="card">
        <ContactForm/>
        <Loader/>
      </div>
    </>
  )
}

export default App
