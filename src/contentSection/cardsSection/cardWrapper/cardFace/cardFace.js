import buttonEditCard from "./buttonEditCard/buttonEditCard.js";
import buttonRemoveCard from "./buttonRemoveCard/buttonRemoveCard.js";
import fieldEditCardText from "./fieldEditCardText/fieldEditCardText.js";

export default function cardFace(text) {
  const cardText = text;
  const card = document.createElement("div");
  const handleFieldEditCardText = fieldEditCardText(cardText, updateCard);
  const field = handleFieldEditCardText.field;
  const buttonEdit = buttonEditCard(disableFlip, editCard);
  const buttonRemove = buttonRemoveCard(removeCard);
  let flipFlag = 1; //default flippable until we edit our stuff;

  card.classList.add("card");

  card.appendChild(field);
  card.appendChild(buttonEdit);
  card.appendChild(buttonRemove);

  function disableFlip() {
    flipFlag = 0;
  }

  function enableFlip() {
    flipFlag = 1;
  }

  function setPendingFlip() {
    flipFlag = 2;
  }

  function getFlipFlag() {
    return flipFlag;
  }

  function editCard() {
    hideCardButtons();
    handleFieldEditCardText.editON();
  }

  function updateCard(name) {
    showCardButtons();
    setPendingFlip();
    //do db here or one level up
    return name;
  }

  function showCardButtons() {
    //db insert
    card.appendChild(buttonEdit);
    card.appendChild(buttonRemove);
  }

  function hideCardButtons() {
    buttonEdit.remove();
    buttonRemove.remove();
  }

  function removeCard() {
    //do db here or one level up
    card.parentElement.parentElement.remove();
  }

  return {
    card,
    getFlipFlag,
    enableFlip,
  };
}
