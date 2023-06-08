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

const updateClick=()=>{
    fetch(`http://localhost:3004/photos`,{
        method:'Patch',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:'Updated Title',
            body:'Updated Body'
        })
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
    })
}
// npx json-server --watch data/db.json --port 8000

  return (
    <div className="card-heading">
       <h1>State Management</h1>
         {arr.map((item)=>{
              return(
                 <div className="card" key={item.id}>
                    <img src={item.url} alt="img" width={200}/>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
                <button  href={item.thumbnailUrl}>Source</button>
                <button onClick={getData}>Click me!</button>
                <button onClick={updateClick}>Update</button>
                 </div>
              )
            })
            }
    </div>
  )
}

export default Card