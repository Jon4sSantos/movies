fetch(`${API_BASE}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then((response) => response.json())
        .then((data) => {
            if (!data.results || data.results.length === 0) {
                alert("Filme não encontrado");
                return;
            }

            const randomMovieIndex = Math.floor(Math.random() * data.results.length);
            const movie = data.results[randomMovieIndex];

            if (!movie.poster_path) {
                alert("Esse filme não tem poster disponível");
                return;
            }

            const posterMovieUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

            posterPicture.innerHTML = "";

            const posterMovie = document.createElement("img"); /* 'promete' criar a tag img */
            posterMovie.src = posterMovieUrl; /* bota a imagem na tag img */
            posterMovie.alt = movie.original_title; /* bota o alt na tag img */
            posterMovie.id = "poster_home"; /* bota o id na tag img */
            posterPicture.appendChild(posterMovie); /* cria a tag img dentro da picture */
            movieTitle.innerHTML = `${movie.original_title} - ${movie.release_date}`; /* bota o título e a data */
            fetch(`${API_BASE}/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
                .then((response) => response.json())
                .then((data) => {
                const movie = data.results[randomMovieIndex];
                movieOverview.innerHTML = movie.overview; /* bota a sinopse */
            })
        })
        .catch((error) => console.error("Erro na requisição:", error));