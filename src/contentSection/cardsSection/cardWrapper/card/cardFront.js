import cardFace from "./cardFace/cardFace.js";
import cardQuerries from "./cardFace/cardQuerries/cardQuerries.js";

export default function cardFront(
  cardObject,
  getDeckName,
  setCardName,
  onUpdateCardColor
) {
  let cardName = cardObject.title;
  const cardHandle = cardFace(
    cardName,
    updateCardObject,
    removeCardObject,
    updateCardColor
  );
  const db = cardQuerries();
  const card = cardHandle.card;
  card.classList.add("cardFront");

  function updateCardObject(newName) {
    const deckName = getDeckName();
    if (newName == cardObject.title) return newName;
    cardObject.titleNew = newName;
    cardName = db.updateCardObjectName(deckName, cardObject);
    setCardName(cardName);
    return cardName;
  }

  function updateCardColor(newColor) {
    const deckName = getDeckName();
    if (cardObject.backgroundColor == newColor)
      cardObject.backgroundColor = "White";
    else cardObject.backgroundColor = newColor;
    cardObject.title = cardName;
    db.updateCardObjectProperty(deckName, cardObject);
    onUpdateCardColor(cardObject.backgroundColor);
  }

  function removeCardObject() {
    const deckName = getDeckName();
    db.deleteCardObject(deckName, cardName);
    card.parentElement.parentElement.remove();
  }
  return cardHandle;
}
