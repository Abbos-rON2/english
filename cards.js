import data from './data/cards';

function cards() {
    const page = Number(localStorage.getItem('page')) + 1;
    const container = document.querySelector('.container');

    data[page].forEach((element) => {
        const cardContainer = document.createElement('div');
        const card = document.createElement('div');
        const front = document.createElement('div');
        const back = document.createElement('div');
        const frontCardHeader = document.createElement('div');
        const backCardHeader = document.createElement('div');
        cardContainer.className = 'card-container';
        card.className = 'card';
        front.className = 'front';
        back.className = 'back';
        front.style.backgroundImage = `url('./data/${element.image}')`
        frontCardHeader.className = 'card-header';
        frontCardHeader.innerHTML = element.word;
        backCardHeader.className = 'card-header';
        backCardHeader.innerHTML = element.translation;
        container.append(cardContainer);
        cardContainer.append(card);
        card.append(front);
        card.append(back);
        front.append(frontCardHeader);
        back.append(backCardHeader);



    })

}

export default cards;