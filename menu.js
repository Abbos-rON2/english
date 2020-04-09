import data from './data/cards';

function menu() {
    const menu = document.querySelector('.menu');
    const headerItem = document.createElement('a');
    headerItem.innerHTML = 'Главная';
    headerItem.className = 'header-item';
    menu.append(headerItem);

    data[0].forEach((element, index) => {
        const headerItem = document.createElement('a');
        headerItem.innerHTML = element;
        headerItem.href = ''
        headerItem.className = 'header-item';
        headerItem.onclick = () => { localStorage.setItem('page', index); };
        menu.append(headerItem);
    })
}
export default menu;