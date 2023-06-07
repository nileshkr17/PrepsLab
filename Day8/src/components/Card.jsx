import React from 'react'
import { useState } from 'react'

const Card = () => {
    const [change, setChange] = useState(false)
    const handleclick = () => {
        setChange(true);
    }
    
  return (
    <div className="card">
       <h1>State Management</h1>
       {change===true ? <p>Changed!</p> : <p>Not Changed!</p>}
       <button onClick={handleclick}>Click me!</button>
    </div>
  )
}

export default Card