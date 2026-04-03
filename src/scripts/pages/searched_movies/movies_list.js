import { API_BASE, API_KEY } from "../../api/tmdb.js";

const search_results_title = document.getElementById('searched_movies_title');
const movies_container = document.getElementById('searched_movies_container');
const see_more_button = document.getElementById('see_more_button');
const params = new URLSearchParams(window.location.search);
const movieNameSearch = params.get('search');
search_results_title.innerHTML = `Resultados para:<br><span>${movieNameSearch}</span>`;

let qtdMovies=1;
let cont = {x:1};

function showMovies(q, data, cont) {
    alert(data.results.length);
    for (cont.x = 0; cont.x < q; cont.x++) {
        if (cont.x<data.results.length) {
            const createMovieContainer = document.createElement('div');
            const createImg = document.createElement('img');
            const createPic = document.createElement('picture');
            const posterMovieUrl = `https://image.tmdb.org/t/p/w500${data.results[cont.x].poster_path}`;
            movies_container.appendChild(createMovieContainer);
            createMovieContainer.classList.add('movie-container');
            createMovieContainer.appendChild(createPic);
            createPic.classList.add('movie-poster-picture');
            createImg.src = posterMovieUrl;
            createImg.alt = data.results[cont.x].original_title;
            createMovieContainer.appendChild(createPic);
            createPic.appendChild(createImg);
            console.log(`QTD = ${q}`);
        }
    }
}

const url = `${API_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieNameSearch)}&include_adult=false&language=pt-BR&page=1`;    


fetch(url)
    .then((response) => response.json())
    .then((data) => {        
        
        if (data.results.length === 0) {
            movies_container.innerHTML = "<p>Nenhum filme encontrado.</p>";
            return;
        }
        showMovies(qtdMovies, data, cont);
        see_more_button.addEventListener('click', ()=> {
            showMovies(qtdMovies++, data, cont);
        })                        
})
.catch((error) => console.error("Erro:", error));


