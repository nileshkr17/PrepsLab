import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    const navigate = useNavigate();
    const {search,updateSearch} =  useState();


  return (

    <>
    <div className='navbar'>
        
        <div className='left'>
            <h2>Logo</h2>
        </div>
        <div className='right'>
            <ul>
                {/* login button */}
                <li>
                    <button onClick={()=>navigate('/signin')}>Login</button>
                </li>
                {/* signup button */}
                <li>
                    <button onClick={()=>navigate('/signup')}>Signup</button>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav