import { API_BASE, API_KEY } from "../../api/tmdb.js";

const searchButton = document.getElementById("search_movies_button");
const searchInput = document.getElementById("search_movies_input");

export let movieName = '';

if (searchButton) {
     searchButton.addEventListener("click", (event) => {
        event.preventDefault();

        movieName = searchInput.value.trim();

        if (movieName === "") {
            alert("Por favor, digite o nome de um filme.");
            return;
        }

        const url = `${API_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}&include_adult=false&language=pt-BR&page=1`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const url = `pages/searched_movies.html?search=${encodeURIComponent(movieName)}`;
                location.href = url;
            })
            .catch((error) => console.error("Erro na requisição:", error));
    });
}