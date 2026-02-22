import { API_BASE, API_KEY } from "../../api/tmdb.js";

const movies_container = document.getElementById('searched_movies_container');
const params = new URLSearchParams(window.location.search);
const movieNameSearch = params.get('search');

const url = `${API_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieNameSearch)}&include_adult=false&language=pt-BR&page=1`;
    
    fetch(url)
        .then((response) => response.json())
        .then((data) => {        
            if (data.results.length === 0) {
                movies_container.innerHTML = "<p>Nenhum filme encontrado.</p>";
                return;
            }
            
            for (let i = 0; i < data.results.length; i++) {
                const createImg = document.createElement('img');
                const createPic = document.createElement('picture');
                const posterMovieUrl = `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`;
                
                createPic.classList.add('movie-poster-picture');
                createImg.src = posterMovieUrl;
                createImg.alt = data.results[i].original_title;
                
                movies_container.appendChild(createPic);
                createPic.appendChild(createImg);    
            }             
        })
        .catch((error) => console.error("Erro:", error));