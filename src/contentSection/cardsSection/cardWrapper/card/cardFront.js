import cardFace from "./cardFace/cardFace.js";
import cardQuerries from "./cardFace/cardQuerries/cardQuerries.js";

export default function cardFront(cardObject, getDeckName, setCardName) {
  let cardName = cardObject.title;
  const cardHandle = cardFace(cardName, updateCardObject, removeCardObject);
  const db = cardQuerries();
  const card = cardHandle.card;
  card.classList.add("cardFront");

  function updateCardObject(newName) {
    const deckName = getDeckName();
    if (newName == cardObject.title) return newName;
    cardObject.titleNew = newName;
    console.log(cardObject.titleNew);
    cardName = db.updateCardObjectName(deckName, cardObject);
    console.log(cardObject.titleNew);
    setCardName(cardName);
    return cardName;
  }

  function removeCardObject() {
    const deckName = getDeckName();
    db.deleteCardObject(deckName, cardName);
    card.parentElement.parentElement.remove();
  }
  return cardHandle;
}
