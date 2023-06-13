import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'

const Allroutes = () => {
  return (
   
    <Routes>
            <Route 
                path='/' 
                element={
                    <Home/>
                }
            />

        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />

    </Routes>
  )
}

export default Allroutes