import React, { useEffect } from 'react'
import NavBar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

import './App.css'
const App = () => {

  const [cookie] = useCookies(['token']);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie.token) {
      navigate('/login');
    }
  }, [cookie.token, navigate]);

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