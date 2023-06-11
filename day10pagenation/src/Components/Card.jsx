import React from 'react'
import '../Styles/Card.css'


const Card = ({title,body,key}) => {
  return (
    // airline data card with passenger details and airline details country and name of the airline
    <div className="card">
        <div className="left">
            <div className="airline">
                <h1>{key}</h1>
            </div>
            <div className="passenger">
                <h1> Title :{title}</h1>
            </div>
        </div>
        <div className="right">
            <div className="airline">
                <a href="{airlineurl}"><h1>{body}</h1></a>
            </div>
            {/* country */}
            <div className="country">
                {/* <h1>{airlinecountry}</h1> */}
                <h1>{key}</h1>
            </div>
            <div className="passenger">
                <h1></h1>
            </div>
        </div>
    </div>

    

    )
}

export default Card