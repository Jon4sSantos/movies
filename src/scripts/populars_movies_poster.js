const poster_container = document.querySelectorAll('.popular-poster-div');
const poster = document.querySelectorAll('.popular-poster');
const poster_info = document.querySelectorAll('.popular-poster-info');
const poster_area = document.getElementById('populares_posters');

let posterAberto = false;

poster_container.forEach((posterDiv, i) => {
     poster[i].addEventListener('mouseenter', () => {
          if (!posterAberto)
               poster[i].style.transform = '';
     });
     poster[i].addEventListener('mouseleave', () => {
          if (!posterAberto) {
               poster[i].style.transform = ' ';
          }
     });
     poster[i].addEventListener('click', () => {
          if (!posterAberto) {
               posterAberto = true;
               openPoster(i);
          } else {
               posterAberto = false;
               closePoster(i);
          }
     });
     poster_info[i].addEventListener('click', () => {
          posterAberto = false;
          closePoster(i);
     });
});

function openPoster(i) {
     poster_area.style.gridTemplateRow = '1fr'; // abre as info
     poster_container.forEach(posterDiv2 => {
          posterDiv2.classList.add('hidden'); // os outros somem
     });
     poster_container[i].classList.remove('hidden'); // o atual não some
     poster_container[i].classList.add('active'); // o atual aparece
     poster[i].style.transform = '' ; // deixa o poster grande
     poster_info[i].style.display = 'flex'; // aparece as  info
}

function closePoster(i) {
     poster_info[i].style.display = ''; // info some
     poster_area.style.gridTemplateColumns = ''; // aparece outros poster
     poster[i].style.transform = ' '; //deixa pequeno
     poster_container.forEach(posterDiv2 => { // para cada container de poster
          posterDiv2.classList.remove('hidden'); // eles não estao escondidos
          posterDiv2.classList.remove('active'); // eles não estao ativos
     });
}