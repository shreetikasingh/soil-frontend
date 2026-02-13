import { Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './pages/About'
import Login from './pages/Home'
import About from './pages/Login'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
