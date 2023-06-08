import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
 const [arr, setArr] = useState([]);
  const getData = async()=>{
    const response = await fetch("http://localhost:3004/users",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    });

    const data = await response.json();
    console.log(data);
    setArr(data);
  }

  useEffect(() => {
    getData();
  }, [])  


const obj = {
  name:"Sonali Kumari",
  age:20,
  imageUrl:"https://www.w3schools.com/howto/img_avatar.png",
  address:"New York",
  email:"BhattaBKL@gmail.com",
  
}


  const handlePost = async()=>{
  fetch("http://localhost:3004/users",{
      method:"POST",
      headers:{
        "Content-Type": "application/json" 
           },
      body:JSON.stringify(obj)
      
   
    }).then((res)=>{
      console.log(res);
      console.log(obj);
    
    })
   
  }


  return (
    <>
      <h1>State Management</h1>
      <button onClick={getData}>Get Data in console</button>
      <button onClick={handlePost}>Post</button>
      {/* <button onClick={()=>setArr([])}>Clear Data</button> */}
      <div className="container">
        {
          arr.map((item)=>{
            return <Card key={item.id} image="https://www.w3schools.com/howto/img_avatar.png" username={item.name} useremail={item.email} />
          }
          )
        }
      </div>

    </>
  )
}

export default App
