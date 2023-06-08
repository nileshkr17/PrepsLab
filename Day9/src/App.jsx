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
    handleSearch();
  }, [])  

const [search, setSearch] = useState("");
const handleSearch = async()=>{
  setSearch(document.getElementById("searchid").value);
  const response = await fetch(`https://www.omdbapi.com/?t=${search}&apikey=4a925a13`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  }).then((response)=>response.json())
  .then((data)=>{
    console.log(data);

  });
 
}
console.log(search);

// const obj = {
//   name:"Sonali Kumari",
//   age:20,
//   imageUrl:"https://www.w3schools.com/howto/img_avatar.png",
//   address:"New York",
//   email:"BhattaBKL@gmail.com",
  
// }
// const handlePost = async()=>{
//    await fetch("http://localhost:3004/users",{
//     method:"POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body:JSON.stringify(obj)
      
//   }.then((response)=>response.json())
//   .then((data)=>console.log(data))
//   )
// }




  return (
    <>
      <h1>State Management</h1>
      <input type="text" placeholder="Search" id='searchid' onChange={handleSearch} />
      <button onClick={getData}>Get Data in console</button>
      {/* <button onClick={handlePost}>Post</button> */}
      <button onClick={()=>setArr([])}>Clear Data</button>
      <button onClick={()=>handleSearch([])}>Clear search</button>
      <div className="container">
        {
          arr.map((item)=>{
            return <Card key={item.id} image="https://www.w3schools.com/howto/img_avatar.png" username={item.name}  useremail={item.email} />
          }
          )
        }
      </div>

    </>
  )
}

export default App
