const pop_movie = document.querySelector(".popular-poster-div"); 
const pop_movie_title = document.querySelector(".pop-poster-title");
const pop_movie_overview = document.querySelector(".pop-poster-overview");

const API_BASE = "https://api.themoviedb.org/3";
const API_KEY = "dbfdc01ab58966201786b6700c97cfd4";

/* https://api.themoviedb.org/3/search/movie?api_key=dbfdc01ab58966201786b6700c97cfd4&query=shrek&include_adult=false&language=en-US&page=1 */


    fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}&include_adult=false&language=pt-BR&page=1`)
        for (const movie of pop_movie) {
            
        }
