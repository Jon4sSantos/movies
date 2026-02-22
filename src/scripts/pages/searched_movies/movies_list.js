import { API_BASE, API_KEY } from "../../api/tmdb.js";
import { movieNameSearch } from "../searched_movies/filtered_movies.js";
const movies_container = document.getElementById('searched_movies_container');


const url = `${API_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieNameSearch)}&include_adult=false&language=en-US&page=1`;
fetch(url)
        .then((response) => response.json())
        .then((data) => {        
                for (let i=0; i< data.results.length; i++) {
                        console.log(data.results[i].original_title);
                        const createImg = document.createElement('img');
                        const createPic = document.createElement('picture');
                        const posterMovieUrl = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                        createPic.classList.add('movie-poster-picture');
                        createImg.src = posterMovieUrl;
                        movies_container.appendChild(createPic);
                        createPic.appendChild(createImg);    
                }             
});