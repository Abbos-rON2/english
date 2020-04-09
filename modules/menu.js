import data from '../data/cards';
import menuItem from './menuItem';

function menu() {
  const headerMainItem = document.createElement('a');
  headerMainItem.innerHTML = 'Главная';
  headerMainItem.href = 'index.html';
  headerMainItem.className = 'header-item';
  document.querySelector('.menu').append(headerMainItem);

  data[0].map((element, index) => { menuItem(element, index); });
}
export default menu;
