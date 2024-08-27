import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Earth from './pages/Earth'
import Stars from './pages/stars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Stars/>
      <div className='s2' >
        <div className='title'>
          <h1 className='metal-mania-regular' >SPACE</h1>
          <h5>Simple 3D Earth with react.js</h5>
        </div>
        <div className='obj'>
          <Earth/>

        </div>
        
        

      </div>
      
      
    </div>
  )
}

export default App
