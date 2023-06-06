import React from 'react'
import './toggle.css'
const Toggle = () => {
   
  return (
    // toggle button
    <>
        <div className="toggle">
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle" id="input-toggle"></label>
        </div>
    </>
  )

}

export default Toggle