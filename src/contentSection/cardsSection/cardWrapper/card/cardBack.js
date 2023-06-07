import cardFace from "./cardFace/cardFace.js";
import cardQuerries from "./cardFace/cardQuerries/cardQuerries.js";

export default function cardBack(cardObject, getDeckName, getCardName) {
  const cardText = cardObject.description;
  const cardHandle = cardFace(cardText, updateCardObject, removeCardObject);
  const db = cardQuerries();
  const card = cardHandle.card;
  card.classList.add("cardBack");

  function updateCardObject(textInput) {
    const deckName = getDeckName();
    cardObject.description = textInput;
    cardObject.title = getCardName();
    db.updateCardObjectProperty(deckName, cardObject);
    return textInput;
  }

  function removeCardObject() {
    const deckName = getDeckName();
    const cardName = getCardName();
    db.deleteCardObject(deckName, cardName);
    card.parentElement.parentElement.remove();
  }
  return cardHandle;
}
