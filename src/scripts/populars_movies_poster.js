const poster = document.querySelectorAll('.popular-poster');

console.log(poster);
poster.forEach(Poster => {
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
            Poster.style.transform = 'rotate(0) scale(1)';
            Poster.style.position = 'absolute';
            Poster.style.transition = 'left 0.4s';
            Poster.style.left = '0px';
            click = true;
        } else {
            Poster.style.transform = 'scale(0.3)';
            Poster.style.position = '';
            Poster.style.left = '';
            click = false;
        }
    });
});