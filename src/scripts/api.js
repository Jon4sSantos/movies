const search_btn = document.getElementById('search_movies_button');
const search_input = document.getElementById('search_movies_input');
const api_Key = "..."; 

search_btn.addEventListener('click', (e)=> {
     e.preventDefault();
     alert(`MOVIE: ${search_input.value}`);
});