/*
https://api.themoviedb.org/3/search/movie?api_key=dbfdc01ab58966201786b6700c97cfd4&query=shrek&include_adult=false&language=en-US&page=1 
*/
const searchButton = document.getElementById("search_movies_button");
const posterPicture = document.getElementById("picture_poster_home");
const movieTitle = document.getElementById("movie_title");
const movieOverview = document.getElementById("movie_overview");
const posterHome = document.getElementById("poster_home");

const API_BASE = "https://api.themoviedb.org/3";
const API_KEY = "dbfdc01ab58966201786b6700c97cfd4";

searchButton.addEventListener("click", (event) => {
    event.preventDefault(); // impede o form de recarregar a página
    
    const movieName = document.getElementById("search_movies_input").value.trim();

    if (!movieName) {
        alert("Digite o nome de um filme");
        return;
    }
    fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}&include_adult=false&language=pt-BR&page=1`)
        .then((response) => response.json())
        .then((data) => {
            if (!data.results || data.results.length === 0) {
                alert("Filme não encontrado");
                return;
            }
            const movie = data.results[0];

            if (!movie.poster_path) {
                alert("Esse filme não tem poster disponível");
                return;
            }

            const posterMovieUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            posterHome.src = posterMovieUrl;
            posterHome.alt = movie.original_title;
            movieTitle.innerHTML = `${movie.original_title} - ${movie.release_date}`;
            movieOverview.innerHTML = movie.overview;
        })
        .catch((error) => console.error("Erro na requisição:", error));
        document.getElementById("search_movies_input").value = "";
});
