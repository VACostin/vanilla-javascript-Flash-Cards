import cardFace from "./cardFace/cardFace.js";
import cardQuerries from "./cardFace/cardQuerries/cardQuerries.js";

export default function cardBack(
  cardObject,
  getDeckName,
  getCardName,
  onUpdateCardColor
) {
  const cardText = cardObject.description;
  const cardHandle = cardFace(
    cardText,
    updateCardObject,
    removeCardObject,
    updateCardColor
  );
  const db = cardQuerries();
  const card = cardHandle.card;
  card.classList.add("cardBack");

  function updateCardObject(newDescription) {
    const deckName = getDeckName();
    cardObject["description"] = newDescription;
    cardObject.title = getCardName();
    db.updateCardObjectProperty(deckName, cardObject);
    return newDescription;
  }

  function updateCardColor(newColor) {
    const deckName = getDeckName();
    if (cardObject.backgroundColor == newColor)
      cardObject.backgroundColor = "White";
    else cardObject.backgroundColor = newColor;
    cardObject.title = getCardName();
    db.updateCardObjectProperty(deckName, cardObject);
    onUpdateCardColor(cardObject.backgroundColor);
  }

  function removeCardObject() {
    const deckName = getDeckName();
    const cardName = getCardName();
    db.deleteCardObject(deckName, cardName);
    card.parentElement.parentElement.remove();
  }
  return cardHandle;
}
