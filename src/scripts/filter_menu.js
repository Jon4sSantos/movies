const filter_btn = document.getElementById('movies_filters_button');
const filter_menu = document.getElementById('filter_menu_desktop');
const years_list = document.getElementById('years_list');
const overlay_body = document.getElementById('overlay_filter');

filter_btn.addEventListener('click', () => {
     const open = filter_menu.style.transform === 'translate(-50%, 20%)';
     if (open) {
          filter_menu.style.transform = 'translate(-50%, -100%)';
          filter_btn.style.backgroundColor = 'white';
          overlay_body.style.display = 'none';
     } else {
          filter_menu.style.transform = 'translate(-50%, 20%)';
          filter_btn.style.backgroundColor = 'grey';
          overlay_body.style.display = 'flex';
     }
});

filter_menu.addEventListener('mouseleave', (e) => {
          filter_menu.style.transform = 'translate(-50%, -100%';
          filter_btn.style.backgroundColor = 'white'; 
          overlay_body.style.display = 'none';
});



const yearsList = document.getElementById("years_list");
for (let y = 2025; y >= 1950; y--) {
     const li = document.createElement("li");
     li.classList.add('ano');
     li.textContent = y;
     yearsList.appendChild(li);
}
const anos = document.querySelectorAll('.ano');
console.log(anos);

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
