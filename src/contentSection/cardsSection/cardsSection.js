import cardWrapper from "./cardWrapper/cardWrapper.js";
import cardQuerries from "./cardWrapper/card/cardFace/cardQuerries/cardQuerries.js";

export default function cardsSection(getDeckNameHandle) {
  const fieldCards = document.querySelector("#fieldCards");
  const getDeckName = getDeckNameHandle;
  const db = cardQuerries();

  function loadCards() {
    const deckName = getDeckName();
    const cardObjects = db.getAllCardObjects(deckName);
    cardObjects.forEach((cardObject) => {
      const cardWrap = cardWrapper(cardObject, getDeckName);
      fieldCards.appendChild(cardWrap);
    });
  }

  function reset() {
    while (fieldCards.firstChild) fieldCards.removeChild(fieldCards.firstChild);
  }

  function addCard() {
    const deckName = getDeckName();
    const cardObject = db.insertCardObject(deckName);
    const cardWrap = cardWrapper(cardObject, getDeckName);
    fieldCards.appendChild(cardWrap);
    cardWrap.scrollIntoView();
  }

  return {
    loadCards,
    reset,
    addCard,
  };
}
