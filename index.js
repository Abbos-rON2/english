import data from './data/cards'; // Данные
import menu from './menu' // Боковое меню
import cards from './cards'

function mainPage() { // Отрисовка главной страницы с категориями
  const container = document.querySelector('.container.main-container');
  console.log()
  data[0].forEach((element, index) => {
    const a = document.createElement('a');
    a.className = 'main-card green';
    a.onclick = () => { localStorage.setItem('page', index); };
    a.innerHTML = `${element}`;
    a.href = './cards.html';
    container.append(a);
    const img = document.createElement('img');
    img.src = `./data/${data[index + 1][0].image}`;
    a.prepend(img);
  });
}

if (document.location.href.slice(document.location.href.lastIndexOf('/') + 1) === 'index.html') {
  mainPage();
  menu();
} else {
  cards();
  menu();
}