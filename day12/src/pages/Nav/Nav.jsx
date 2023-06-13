import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Nav.css'
import {MdOutlineAddBox} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {IoSettingsOutline} from 'react-icons/io5'
import {FaRegPaperPlane} from 'react-icons/fa'

// import {Logo} 
const Nav = () => {

    const navigate = useNavigate();
    const {search,updateSearch} =  useState();




  return (
    <>
        <nav className="nav">
            <div className="logo">
              {/* insta svg */}
              <img src="https://assets.turbologo.com/blog/de/2019/09/18151253/instagram-logo-illustration.png" alt="instagram logo" />
            </div>
            <ul>
                <li><span className='icon'><BsInstagram/></span><a onClick={()=>navigate('/')}>Home</a></li>
                <li><span className='icon'><MdOutlineAddBox/></span><a onClick={()=>navigate('/Post')}>Post</a></li>
                <li> <span className="icon"><AiOutlineUser/></span><a onClick={()=>navigate('/Profile')}>Profile</a></li>
                <li> <span className="icon"><FaRegPaperPlane/></span><a onClick={()=>navigate('/Chat')}>Chat</a></li>
                <li> <span className="icon"><IoSettingsOutline/></span><a onClick={()=>navigate('/Setting')}>Settings</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Nav