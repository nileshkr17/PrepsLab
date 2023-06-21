import React from 'react'
import '../styles/Card.css'
const Card = ({title,img,year,type}) => {
  return (
    <div className="card-grid bg">
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