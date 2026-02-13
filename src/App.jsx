import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {

  const [count, setCount] = useState(0)


  

  return (
    <>
      <div className='bg-red-400'>
        <h1 className='text-red-200 font-bold'>Hi there</h1>
      </div>
    </>
  )
}

export default App
