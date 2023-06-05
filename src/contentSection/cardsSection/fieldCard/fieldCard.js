import buttonEditCard from "./buttonEditCard/buttonEditCard.js";
import buttonRemoveCard from "./buttonRemoveCard/buttonRemoveCard.js";
import fieldEditCardName from "./fieldEditCardName/fieldEditCardName.js";

export default function fieldCard(name) {
  const cardName = name;
  const card = document.createElement("div");
  const handleFieldEditCardName = fieldEditCardName(cardName, updateCard);
  const field = handleFieldEditCardName.field;
  const buttonEdit = buttonEditCard(editCard);
  const buttonRemove = buttonRemoveCard(removeCard);

  card.classList.add("card");

  card.appendChild(field);
  card.appendChild(buttonEdit);
  card.appendChild(buttonRemove);

  function editCard() {
    hideCardButtons();
    handleFieldEditCardName.editON();
  }

  function updateCard(name) {
    showCardButtons();
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

  //wrapper neeeded so our slideshow effect works
  //please put this on a different module, it looks ugly
  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add('cardWrapper');
  cardWrapper.appendChild(card);

  function removeCard() {
    //do db here or one level up
    cardWrapper.remove();
  }

  return cardWrapper;
}
