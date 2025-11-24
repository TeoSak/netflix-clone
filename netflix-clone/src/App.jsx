import React, { useEffect } from 'react'
import { Home } from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Login } from '../src/pages/Login/Login'
import { Player } from '../src/pages/Player/Player'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const navigate = useNavigate()

  return (
    <div className='s'>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/play/:id' element={<Player />} />
      </Routes>
    </div>
  )
}

export default App