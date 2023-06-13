import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
                <button></button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Nav