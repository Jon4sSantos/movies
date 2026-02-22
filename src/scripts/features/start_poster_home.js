import { API_KEY, API_BASE } from "../api/tmdb.js";

const posterMovie = document.getElementById("poster_home");
const randomMoviePage = Math.floor(Math.random() * 99);

const url = `${API_BASE}/movie/popular?api_key=${API_KEY}&language=en-US&page=${randomMoviePage}`;
fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (!data.results || data.results.length === 0) {
                alert("Filme não encontrado! Atualize a página, por favor.");
                return;
            }

            const randomMovieIndex = Math.floor(Math.random() * data.results.length);
            const movie = data.results[randomMovieIndex];

            if (!movie.poster_path) {
                alert("Esse filme não tem poster disponível");
                return;
            }

            const posterMovieUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

            posterMovie.src = posterMovieUrl; /* bota a imagem na tag img */
            posterMovie.alt = movie.original_title; /* bota o alt na tag img */
            const movieDateRealease = movie.release_date.replace(/-/g, "/");
            const movieTitle = document.getElementById('movie_title');
            movieTitle.innerHTML = `${movie.original_title} - ${movieDateRealease}`; /* bota o título e a data */
            
            fetch(`${API_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
                .then((response) => response.json())
                .then((data) => {
                const movie = data.results[randomMovieIndex];
                const movieOverview = document.getElementById('movie_overview');
                if (!movie.overview) {
                    movieOverview.textContent = 'ERROR';
                    movieOverview.style.textAlign = 'center';
                    movieOverview.style.color = 'red';   
                } else
                    movieOverview.innerHTML = movie.overview; /* bota a sinopse */
            })
        })
        .catch((error) => console.error("Erro na requisição:", error));