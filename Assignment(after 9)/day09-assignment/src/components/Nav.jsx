import React from 'react'
import '../styles/Nav.css'

const Nav = () => {
  return (
    <div className="container">
    <div className="nav">
        <div className="left">
            <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix"/>
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>  
        </div>
        <div className="right">
            <div className="profile">
                {/* <img src="https://www.w3schools.com/howto/img_avatar.png" width={10} alt="profile"/> */}
            </div>
        </div>
        </div>        
    </div>
  )
}
export default Nav