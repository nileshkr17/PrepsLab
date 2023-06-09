import React from 'react'
import '../styles/Card.css'
const Card = ({title,img,year,type}) => {
  return (
    // movie card title year poster type
    <div className="card-grid">
        <div className="card">
            <img src={img} alt="poster"/>
            <div className="card-body">
                <h3>TITLE: {title}</h3>
                <p>YEAR: {year}</p>
                <p>TYPE: {type}</p>
              </div>
          </div>
        
    </div>
      
   
  )
}

export default Card