import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Experience from './components/Experience'
import "./App.css";

function App() {

  return (
    <>
      <div class="main-content w-100">
        <Navbar />
        <Landing />
        <main>
          <Experience />
        </main>
      </div>
    </>
  )
}

export default App
