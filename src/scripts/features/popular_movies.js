    const pop_movie = document.querySelectorAll(".popular-poster-div");

        for (const movie of pop_movie) {
            let movieName = movie.dataset.title;
            fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}&include_adult=false&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                const pop_movie_title = movie.querySelector('.pop-poster-title');
                pop_movie_title.innerHTML = data.results[0].title;
            })
            fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}&include_adult=false&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => {
                const pop_movie_overview = movie.querySelector('.pop-poster-overview');
                pop_movie_overview.innerHTML = data.results[0].overview;
            })
        }
