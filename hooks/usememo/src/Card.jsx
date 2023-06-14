import React from 'react'

export const MemoCard = React.memo(({ title, description }) => {
     return(
            <div className="card">
                <img src={image}></img>
                <h1>{title}</h1>
                <h2>{desc}</h2>
            </div>
     )
})
export default Card