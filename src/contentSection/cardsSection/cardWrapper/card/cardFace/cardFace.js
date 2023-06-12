import buttonEditCard from "./buttonEditCard/buttonEditCard.js";
import buttonRemoveCard from "./buttonRemoveCard/buttonRemoveCard.js";
import buttonColorCard from "./buttonColorCard/buttonColorCard.js";
import fieldEditCardText from "./fieldEditCardText/fieldEditCardText.js";

export default function cardFace(
  cardText,
  updateCardObject,
  removeCardObject,
  onUpdateCardColor
) {
  const card = document.createElement("div");
  const handleFieldEditCardText = fieldEditCardText(cardText, updateCardText);
  const buttonEdit = buttonEditCard(disableFlip, editCard);
  const buttonRemove = buttonRemoveCard(removeCard);
  const buttonColor = buttonColorCard(
    card,
    showColors,
    hideColors,
    changeColor
  );
  let flipFlag = 1;
  init();

  function init() {
    const field = handleFieldEditCardText.field;
    card.classList.add("card");
    card.appendChild(field);
    card.appendChild(buttonEdit);
    card.appendChild(buttonRemove);
    card.appendChild(buttonColor);
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
    card.appendChild(buttonColor);
  }

  function hideCardButtons() {
    buttonEdit.remove();
    buttonRemove.remove();
    buttonColor.remove();
  }

  function removeCard() {
    removeCardObject();
  }

  function showColors() {
    buttonEdit.remove();
    buttonRemove.remove();
    disableFlip();
  }

  function hideColors() {
    card.appendChild(buttonEdit);
    card.appendChild(buttonRemove);
    setPendingFlip();
  }

  function changeColor(color) {
    onUpdateCardColor(color);
  }

  return {
    card,
    getFlipFlag,
    enableFlip,
  };
}
