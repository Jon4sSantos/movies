const search_btn = document.getElementById('search_movies_button');
const search_input = document.getElementById('search_movies_input');
const api_Key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmZkYzAxYWI1ODk2NjIwMTc4NmI2NzAwYzk3Y2ZkNCIsIm5iZiI6MTc1NDIzMTAxNC43NzIsInN1YiI6IjY4OGY3MGU2Y2E0ZmVjZmU1M2IyMmQ5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ixZ4j-9Yzwn8BoYKwTp1BW8Z2RKsS0s6d_oRH4bLqyU"; 

search_btn.addEventListener('click', (e)=> {
     e.preventDefault();
     alert(`MOVIE: ${search_input.value}`);
});