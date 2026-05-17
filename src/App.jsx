import { useState } from 'react'
import Home from './components/Home'
import ComingSoon from './components/ComingSoon'
import './App.css'
import { Route, Routes } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  )
}

export default App