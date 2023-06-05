import cardWrapper from "./cardWrapper/cardWrapper.js";

export default function cardsSection(getDeckNameHandle) {
  const fieldCards = document.querySelector("#fieldCards");
  const getDeckName = getDeckNameHandle;

  function load() {
    const deckName = getDeckName();
    const cards = getCards(deckName);
    //foreach card
    //fieldCards.append(card)
  }

  function getCards() {
    const deckName = getDeckName();
    //db query
    console.log("getting cards for: " + deckName);
    //return cards
  }

  function addCard() {
    const deckName = getDeckName();
    const defaultCardName = "NewCard";
    let cardName = defaultCardName;
    //db query
    const cardWrap = cardWrapper(cardName, "description");
    fieldCards.insertBefore(cardWrap, fieldCards.firstChild);
  }

  function reset() {
    while (fieldCards.firstChild) {
      fieldCards.removeChild(fieldCards.firstChild);
    }
  }

  return {
    load,
    addCard,
    reset,
  };
}
