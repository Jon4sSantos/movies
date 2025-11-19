const poster = document.querySelectorAll('.popular-poster');
const poster_container = document.querySelectorAll('.popular-poster-div');

console.log(poster);
poster.forEach(Poster=> {
     let click = false;

     Poster.addEventListener('mouseenter', () => {
          Poster.style.transform = 'rotate(4deg) scale(1)';
     });
     Poster.addEventListener('mouseleave', () => {
          if (!click) {
               Poster.style.transform = 'scale(0.3) rotate(-4deg)';
          }
     });
     
     Poster.addEventListener('click', () => {
          if (!click) {
               click = true;
               poster_container[0].style.gridColumn= '1/4';
               poster_container[0].style.backgroundColor = 'red';
               Poster.style.transform = 'rotate(0) scale(1)';
               poster_container.style.position = 'absolute';
               poster_container.style.transition = 'left 0.4s';
               poster_container.style.left = '0px';
               
          } else {
               Poster.style.transform = 'scale(0.3)';
               Poster.style.position = '';
               Poster.style.left = '';
               click = false;
          }
     });
});