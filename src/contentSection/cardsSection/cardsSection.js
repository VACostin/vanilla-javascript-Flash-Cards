import fieldCard from "./fieldCard/fieldCard.js";

export default function cardsSection() {

  const fieldCards = document.querySelector('#fieldCards');

  function render() {
    console.log('we aint doing shit here');
  }

  function load(deckName) {
    const cards = getCards(deckName)
    //foreach card
    //fieldCards.append(card)
  }

  function getCards(deckName) {
    console.log('getting cards for: ' + deckName);
  }

  function addCard(deckName) {
    //db query
    const defaultName = 'NewCard';
    const card = fieldCard(defaultName);
    fieldCards.append(card);
    console.log(card);
  }

  function reset() {
    while (fieldCards.firstChild) {
      fieldCards.removeChild(fieldCards.firstChild);
    }
  }



  return {
    render,
    load,
    addCard,
    reset,
  }
}