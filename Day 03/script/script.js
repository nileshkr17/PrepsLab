const data = [
    {
        image: "https://www.newdvdreleasedates.com/images/posters/the-tomorrow-war-2021-02.jpg",
        "title": "The Tomorrow War",
        rating: 9.3
    },
    {
        image: "https://m.media-amazon.com/images/S/pv-target-images/5c8570737f81716a78f471fdd247ba5a4a10f9c4025fb534f60cf9715cc1f3fc._UR2000,3000_.jpg",
        title : "Jurassic World: Fallen Kingdom",
        rating: 9.2
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/en/d/de/AirFilmPoster.png",
        title : "Air",
        rating: 9.2
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/en/6/66/Wednesday_Netflix_series_poster.png",
        title : "Wednesday",
        rating: 9.2
    },
    {
        image: "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
        title : "Fast and Furious 9",
        rating: 9.2
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/en/a/a0/Hellbound_TV_series.jpg",
        title : "Hellbound",
        rating: 9.2
    }
];

const movie_box = document.getElementById("showmovie")

for(let i =0; i<data.length;i++)
{
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src=data[i].image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = data[i].title;
    const rating = document.createElement("h4");
    rating.innerText = data[i].rating;
    button = document.createElement("button");
    button.innerText = "Play Now";
    button.addEventListener("click",()=>{
        // alert("Play"+data[i].title+" now!");
        alert(`Play ${data[i].title} now!` );
    })

    div.append(image,movieTitle,rating,button);
    movie_box.append(div);
}