import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Body from "./components/Body";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("spider");

  const searchHandle = () => {
    fetchMovies(search);
  };

  // const fetchMovies = async (searchValue) => {
  //   const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=4a925a13`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data.Search);
  //   setMovies(data.Search);
  // };

  const fetchMovies = async (searchValue) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
    const data = await response.json();
    console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies(search);
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <Nav />
      <div>
        <div className="search-bar">
          {/*  search bar */}
          <input
            type="text"
            placeholder="Search for a title, genres, people"
            onChange={handleInputChange}
            value={search}
          />
          <button onClick={searchHandle}>Search</button>
        </div>
        <div className="row">
          <h2 style={{ color: "white" }}>NETFLIX ORIGINALS</h2>
          <div className="posters"></div>
        </div>
      </div>

      {/* check if data is there inside the search or data found else no data */}
      {movies ? (
        movies.map((movie) => (
          <Card
            key={movie.imdbID}
            title={movie.Title}
            year={movie.Year}
            img={movie.Poster}
            type={movie.Type}
          />
        ))
      ) : (
        <h1>No Data Found</h1>
      )}

    </div>
  );
}

export default App;
