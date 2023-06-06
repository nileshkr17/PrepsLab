import React from 'react'
import './toggle.css'

    // dark mode 
const Toggle = () => {
    const toggle = document.getElementById('toggle')
    const body = document.body
    const toggleIcon = document.querySelector('.indicator')
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme) {
      body.classList.add('dark-theme')
      toggleIcon.classList.add('active')
    } else {
      body.classList.remove('dark-theme')
      toggleIcon.classList.remove('active')
    }
    toggle.addEventListener('click', () => {
      body.classList.toggle('dark-theme')
      toggleIcon.classList.toggle('active')
      if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'active')
      } else {
        localStorage.removeItem('theme')
      } 
    })
    
  return (
    // toggle button
    <>
        <div className="toggle" id='toggle'>
          <i className="indicator"></i>
        </div>
    </>
  )

}

export default Toggle