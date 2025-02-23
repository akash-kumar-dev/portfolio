import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Experience from './components/Experience'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import "./App.css";

function App() {

  return (
    <>
      <div className="main-content w-100">
        <Navbar />
        <div>
          <Landing/>
        </div>
        <main>
          <About/>
          <Skills />
          <Experience />
          <Projects />
        </main>
      </div>
    </>
  )
}

export default App
