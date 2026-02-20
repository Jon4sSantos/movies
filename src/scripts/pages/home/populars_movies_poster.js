const poster_container = document.querySelectorAll('.popular-poster-div');
const posterImg = document.querySelectorAll('.popular-poster');
const poster_info = document.querySelectorAll('.popular-poster-info');
const poster_area = document.getElementById('populares_posters');

poster_container.forEach(posterDiv => {
     posterDiv.addEventListener('click', () => {
          poster_container.forEach(poster => {    
               if (poster === posterDiv) {
                    poster.classList.toggle('active');
               }
               else {
                    poster.classList.toggle('hidden');
               }
          });
     });
});