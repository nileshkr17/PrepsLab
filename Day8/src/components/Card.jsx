import React, { useEffect, useState} from 'react'

const Card = () => {
const [arr,setArr] = useState([]);

const getData=async()=>{
  await fetch('https://jsonplaceholder.typicode.com/photos',
  {
    method:'GET',
  }
    )
  .then((response)=>response.json())
  .then((data)=>{
    // select only 10 data
    data=data.slice(0,10);
    setArr(data);
  })
  }
  useEffect(()=>{
    getData();
},[])
  return (
    <div className="card-heading">
       <h1>State Management</h1>
       {/* fetch arr map */}
         {arr.map((item)=>{
              return(
                 <div className="card" key={item.id}>
                    <img src={item.url} alt="img" width={200}/>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                <button  href={item.thumbnailUrl}>Source</button>
                <button onClick={getData}>Click me!</button>

                 </div>
              )
            })
            }

       
    </div>
  )
}

export default Card