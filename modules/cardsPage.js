import cardItem from './cardItem';
import data from '../data/cards';

export default function cardsPage() {
  const page = Number(localStorage.getItem('page')) + 1; // id of category

  data[page].map((element) => { cardItem(element); });
}
