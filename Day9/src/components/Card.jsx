import React from 'react'

const Card = ({image,username,useremail,onclick})=> {
  return (
    <>
        <div className="card">
            <img src={image} alt="Avatar" style={{width:"100%"}}/>
            <div className="container">
                <h4><b>{username}</b></h4>
                <p>{useremail}</p>
                <button onClick={onclick}>Delete</button>
            </div>
        </div>
    </>
  )
}

export default Card