import cardAudio from './cardAudio';

export default function cardItem(element) {
  const cardContainer = document.createElement('div');
  const card = document.createElement('div');
  const front = document.createElement('div');
  const back = document.createElement('div');
  const frontCardHeader = document.createElement('div');
  const backCardHeader = document.createElement('div');
  const swap = document.createElement('div');
  cardContainer.className = 'card-container';
  card.className = 'card';
  card.onclick = (e) => { if (e.target !== swap) { cardAudio(element); } };
  card.onmouseleave = () => { card.classList.remove('swap'); };
  front.className = 'front';
  back.className = 'back';
  front.style.backgroundImage = `url('./data/${element.image}')`;
  frontCardHeader.className = 'card-header';
  frontCardHeader.innerHTML = element.word;
  backCardHeader.className = 'card-header';
  backCardHeader.innerHTML = element.translation;
  back.style.backgroundImage = `url('./data/${element.image}')`;
  swap.innerHTML = '&#9851;';
  swap.className = 'swapBtn';
  swap.onclick = () => { card.classList.add('swap'); };

  document.querySelector('.container').append(cardContainer);
  cardContainer.append(card);
  card.append(front);
  card.append(back);
  card.append(swap);
  front.append(frontCardHeader);
  back.append(backCardHeader);
}
