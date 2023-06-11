import './App.css';
import Card from './Components/Card';
import Nav from './Components/Nav';
import { useEffect, useState } from 'react';

function App() {
  const [arr, setArr] = useState([]);
  const [wholeArr, setWholeArr] = useState([]);
  const [searchStr, setSearchStr] = useState('');
  // const [pageArr, setPageArr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
   const [page, setPage] = useState(0);
const pageArr = [];
let i=1;
while(i<= wholeArr.length/20){
  pageArr.push(i);
  i++;
}

console.log(pageArr);
  const getData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: 'GET',
      })
      .then((response) => response.json())
      .then((data) => {
        setWholeArr(data);
        const end= page*20;
        const start= end-20;
        const newData= data.slice(start*20,end);
        setArr(newData);
      });
  };
      
  // const handleChange = (e) => {
  //   setSearchStr(e.target.value);
  // };
  // const getData = async () => {
  //   const response = await fetch(
  //     `https://api.instantwebtools.net/v1/passenger?page=${page}&size=20`,
  //     {
  //       method: 'GET',
  //     }
  //   );
  //   const data = await response.json();
  //   setArr(data.data);
  // };

  const handlePage = (el) => {
    setPage(el);
  };

  console.log(page);

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Nav />
    {arr.length > 0 
    ?
    <div
      style={{
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        marginTop:'5%'
      }}
      id='card' 
    >
      {/* {
        arr.map((el)=>{
          return(
            <Card key={el.id} passenger={el.name} airlineurl={el.airline[0].website} airlinecountry={el.airline[0].country} airlinename={el.airline[0].name}  /> 
          );
        })
      } */}


      {
        arr.map((el)=>{
          return(
            <Card key={el.userid} title={el.title} body={el.body}  />
          );
        })
      }
    </div>
      : <h1>Loading...</h1>
      }

      
      {pageArr.map((el) => (
        <button id="pagebtn" key={el} onClick={() => handlePage(el)}>
          {el}
        </button>
      ))}
    </div>
  );
}

export default App;
