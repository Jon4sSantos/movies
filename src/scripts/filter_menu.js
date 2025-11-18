const filter_btn = document.getElementById('movies_filters_button');
const filter_menu = document.getElementById('filter_menu_desktop');

filter_btn.addEventListener('click', () => {
     if (filter_menu.style.transform == 'translate(-50%, -100%)') {
          filter_menu.style.transform = 'translate(-50%, 20%)';
          filter_btn.style.backgroundColor = 'grey';
     }
     else {
          filter_menu.style.transform = 'translate(-50%, -100%)';
          filter_btn.style.backgroundColor = 'white';
     }
}); 


const lista_dos_anos = document.getElementById('years_list');
let ano = 1900;

while (ano <= 2025) {
     let novoAno = document.createElement('li');
     novoAno.textContent = ano;
     lista_dos_anos.appendChild(novoAno);
     ano++
}