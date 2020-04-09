export default function menuItem(element, index) {
  const headerItem = document.createElement('a');
  headerItem.innerHTML = element;
  headerItem.href = 'cards.html';
  headerItem.className = 'header-item';
  headerItem.onclick = () => { localStorage.setItem('page', index); };
  document.querySelector('.menu').append(headerItem);
}
