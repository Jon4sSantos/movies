import { API_KEY, API_BASE } from "../../api/tmdb.js";

console.log("Import funcionou!");

export let movieName = '';

function initSearch() {
    // Busca dentro da função, não no escopo global
    const searchButton = document.getElementById("search_movies_button");
    const searchInput = document.getElementById("search_movies_input");

    console.log("searchButton:", searchButton);
    console.log("searchInput:", searchInput);

    if (!searchButton) {
        console.error("Botão não encontrado!");
        return;
    }

    console.log("Botão encontrado com sucesso!");

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
                localStorage.setItem('searchResults', JSON.stringify(data));
                localStorage.setItem('searchQuery', movieName);
                searchInput.value = "";
                window.location.href = 'pages/searched_movies.html';
            })
            .catch((error) => console.error("Erro na requisição:", error));
    });
}

// Força a execução após o DOM estar pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearch);
} else {
    // Se o DOM já estiver pronto, verifica se o botão existe
    // Se ainda não existir, usa um intervalo para verificar
    if (!document.getElementById("search_movies_button")) {
        const interval = setInterval(() => {
            if (document.getElementById("search_movies_button")) {
                clearInterval(interval);
                initSearch();
            }
        }, 100);
    } else {
        initSearch();
    }
}