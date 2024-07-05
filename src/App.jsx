import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'

function App() {

  return (
    <>
      <div class="main-content">
        <Navbar />
        <Landing/>
      </div>
    </>
  )
}

export default App
