import buttonEditCard from "./buttonEditCard/buttonEditCard.js";
import buttonRemoveCard from "./buttonRemoveCard/buttonRemoveCard.js";
import fieldEditCardText from "./fieldEditCardText/fieldEditCardText.js";

export default function cardFace(cardText, updateCardObject, removeCardObject) {
  const card = document.createElement("div");
  const handleFieldEditCardText = fieldEditCardText(cardText, updateCardText);
  const buttonEdit = buttonEditCard(disableFlip, editCard);
  const buttonRemove = buttonRemoveCard(removeCard);
  let flipFlag = 1;
  init();

  function init() {
    const field = handleFieldEditCardText.field;
    card.classList.add("card");
    card.appendChild(field);
    card.appendChild(buttonEdit);
    card.appendChild(buttonRemove);
  }

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

  function updateCardText(textInput) {
    showCardButtons();
    setPendingFlip();
    const newText = updateCardObject(textInput);
    return newText;
  }

  function showCardButtons() {
    card.appendChild(buttonEdit);
    card.appendChild(buttonRemove);
  }

  function hideCardButtons() {
    buttonEdit.remove();
    buttonRemove.remove();
  }

  function removeCard() {
    removeCardObject();
  }

  return {
    card,
    getFlipFlag,
    enableFlip,
  };
}
