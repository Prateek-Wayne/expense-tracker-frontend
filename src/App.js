import React from 'react'
import NavBar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import './App.css'
const App = () => {
  return (
    <div className='main'>
      <NavBar/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default App