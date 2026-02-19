const filter_btn = document.getElementById('movies_filters_button');
const filter_menu = document.getElementById('filter_menu_desktop');
const years_list = document.getElementById('years_list');
const overlay_body = document.getElementById('overlay_filter');
const filter_remove = document.getElementById('remove_filter_button');
const filter_add = document.getElementById('add_filter_button');

function filtersClose() {
     filter_menu.style.transform = 'translate(-50%, -110%)';
     overlay_body.style.display = 'none';
}

function filtersOpen() {
     filter_menu.style.transform = 'translate(-50%, 20%)';
     overlay_body.style.display = 'flex';
}

const open = filter_menu.style.transform === 'translate(-50%, 20%)';

filter_btn.addEventListener('click', () => {     
     if (open) {
          filtersClose();
     } else {
          filtersOpen();
     }
});

filter_menu.addEventListener('mouseleave', (e) => {
          filtersClose();
});

const yearsList = document.getElementById("years_list");

for (let y = 2025; y >= 1950; y--) {
     const li = document.createElement("li");
     li.classList.add('ano');
     li.textContent = y;
     yearsList.appendChild(li);
}

const anos = document.querySelectorAll('.ano');
anos.forEach((ano) => {
     ano.addEventListener('click', () => {
          ano.classList.toggle('escolhido');
          if (ano.classList.contains('escolhido')) {
               ano.style.color = 'yellow';         
          } else {
               ano.style.textDecoration = 'none';
          }
     });
});

filter_remove.addEventListener('click', () => {
     filtersClose();

});

filter_add.addEventListener('click', () => {
     location.replace('../pages/searched_movies.html');
     filtersClose();
});