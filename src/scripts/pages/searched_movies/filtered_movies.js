// Não precisa importar movieName, pois ele será resetado na nova página

const titlePage = document.getElementById('searched_movies_title');

// Recupera o que você salvou no arquivo anterior
const movieName = localStorage.getItem('searchQuery');

console.log("movieName recuperado:", movieName);

if (movieName) {
    titlePage.textContent = `Resultados de ${movieName}`;
} else {
    titlePage.textContent = "Resultados da busca";
}

// Agora você também pode recuperar os resultados do filme:
const searchResults = JSON.parse(localStorage.getItem('searchResults'));

console.log("Resultados:", searchResults);