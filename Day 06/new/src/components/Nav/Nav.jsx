import React from 'react'
import './nav.css'
import {MdOutlineAddBox} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import {IoSettingsOutline} from 'react-icons/io5'
import {FaRegPaperPlane} from 'react-icons/fa'
import Toggle from '../Toggle'

// import {Logo} 
const Nav = () => {
  return (
    <>
        <nav className="nav">
            <div className="logo">
              {/* insta svg */}
              <img src="https://assets.turbologo.com/blog/de/2019/09/18151253/instagram-logo-illustration.png" alt="instagram logo" />
            </div>
            <ul>
                <li><span className='icon'><BsInstagram/></span>  <a href="#">Home</a></li>
                <li><span className='icon'><MdOutlineAddBox/></span><a href="#">Post</a></li>
                <li> <span className="icon"><AiOutlineUser/></span> <a href="#">Profile</a></li>
                <li> <span className="icon"><FaRegPaperPlane/></span>  <a href="#">Chat</a></li>
                <li> <span className="icon"><IoSettingsOutline/></span>  <a href="#">Settings</a></li>
                <li><Toggle/>
                 </li>
            </ul>
        </nav>
    </>
  )
}

export default Nav