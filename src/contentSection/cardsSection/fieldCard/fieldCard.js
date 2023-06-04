import buttonEditCard from "./buttonEditCard/buttonEditCard.js";
import buttonRemoveCard from "./buttonRemoveCard/buttonRemoveCard.js";
import fieldEditCardName from "./fieldEditCardName/fieldEditCardName.js";

export default function fieldCard(name) {

  const card = document.createElement('div');
  card.classList.add('card');
  let cardName = name;
  let cardID = 'card_' + name;
  card.setAttribute('id', cardID)

  const field = fieldCardName(cardName, onFinishEditTitle, editTitle);
  const buttonEdit = buttonEditCard(editTitle);
  const buttonRemove = buttonRemoveCard(removeCard);

  card.appendChild(field);
  card.appendChild(buttonEdit);
  card.appendChild(buttonRemove);

  function editTitle() {
    field.contentEditable = true;
    buttonEdit.remove();
    buttonRemove.remove();
    field.focus();
  }

  function onFinishEditTitle() {
    //db insert
    field.contentEditable = false;
    card.appendChild(buttonEdit);
    card.appendChild(buttonRemove);
  }

  function removeCard() {
    card.remove();
  }

  return card;
}