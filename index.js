import data from './data/cards';

function MainPage() {
  const container = document.querySelector('.container.main-container');
  const menu = document.querySelector('.menu');

  const arr = data[0].map((item) => {
    const a = document.createElement('a');
    a.className = 'main-card green';
    a.innerHTML = `${item}`;
    return a;
  });
  arr.forEach((element, index) => {
    const headerItem = document.createElement('a');
    headerItem.innerHTML = element.innerHTML;
    headerItem.className = 'header-item';
    menu.append(headerItem);
    container.append(element);
    const img = document.createElement('img');
    img.src = `./data/${data[index + 1][0].image}`;
    element.prepend(img);
  });
}

MainPage();
