/*
https://api.themoviedb.org/3/search/movie?api_key=dbfdc01ab58966201786b6700c97cfd4&query=shrek&include_adult=false&language=en-US&page=1 
*/
import { API_KEY, API_BASE } from "../../api/tmdb.js";

const searchButton = document.getElementById("search_movies_button");
const posterPicture = document.getElementById("picture_poster_home");
const movieTitle = document.getElementById("movie_title");
const movieOverview = document.getElementById("movie_overview");
const posterHome = document.getElementById("poster_home");

searchButton.addEventListener("click", (event) => {
    event.preventDefault(); // impede o form de recarregar a página
    
    const movieName = document.getElementById("search_movies_input").value.trim();
    
    if (!movieName) {
        alert("Digite o nome de um filme");
        return;
    }

    const url = `${API_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1` 
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {})
        .catch((error) => console.error("Erro na requisição:", error));
        document.getElementById("search_movies_input").value = "";
});