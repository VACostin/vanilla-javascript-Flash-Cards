import cardWrapper from "./cardWrapper/cardWrapper.js";
import cardQuerries from "./cardWrapper/cardFace/cardQuerries/cardQuerries.js";

export default function cardsSection(getDeckNameHandle) {
  const fieldCards = document.querySelector("#fieldCards");
  const getDeckName = getDeckNameHandle;
  const db = cardQuerries();

  function loadCards() {
    //reset
    const deckName = getDeckName();
    const cards = db.getAllCardObjects(deckName);
    //foreach card
    //fieldCards.append(card)
  }

  function reset() {
    while (fieldCards.firstChild) {
      fieldCards.removeChild(fieldCards.firstChild);
    }
  }

  function addCard() {
    const deckName = getDeckName();
    const defaultCardName = "NewCard";
    let cardName = defaultCardName;
    const nameList = db.getAllCardNames(deckName);
    for (let i = 1; nameList.includes(cardName); i++)
      cardName = defaultCardName + i;
    db.insertCardObject(deckName, cardName);
    console.log(JSON.parse(localStorage.getItem("NewDeck"))[cardName]);
    const cardWrap = cardWrapper(cardName, "description");
    fieldCards.appendChild(cardWrap);
    cardWrap.scrollIntoView();
  }

  return {
    loadCards,
    reset,
    addCard,
  };
}
