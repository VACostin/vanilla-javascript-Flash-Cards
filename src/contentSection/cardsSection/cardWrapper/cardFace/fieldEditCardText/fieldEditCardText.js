import buttonDoneEditCardName from "./buttonDoneEditCardName/buttonDoneEditCardName.js";
import buttonCancelEditCardName from "./buttonCancelEditCardName/buttonCancelEditCardName.js";
import fieldCardName from "./fieldCardName/fieldCardName.js";

export default function fieldEditCardText(name, updateDeckEntry) {
  //let cardName = name;

  const field = document.createElement("div");
  const fieldName = fieldCardName(name, onFinishEditCard);
  //const buttonDone = buttonDoneEditCardName(onFinishEditCard);
  //const buttonCancel = buttonCancelEditCardName(cancelEdit);
  field.classList.add("fieldEditCardText");
  field.appendChild(fieldName);

  function editON() {
    //showEditButons();
    fieldName.contentEditable = true;
    fieldName.focus();
    fieldName.style.outline = "2px solid black";
  }

  //function cancelEdit() {
  //  editOFF(cardName);
  //}

  function onFinishEditCard() {
    let name = fieldName.textContent;
    const newCardName = updateDeckEntry(name);
    //cardName = name;
    editOFF(newCardName);
  }

  function editOFF(name) {
    //hideEditButtons();
    //fieldName.blur();
    fieldName.textContent = name;
    fieldName.contentEditable = false;
    fieldName.style.outline = "none";
  }
  /*
  function showEditButons() {
    field.appendChild(buttonDone);
    field.appendChild(buttonCancel);
  }

  function hideEditButtons() {
    buttonDone.remove();
    buttonCancel.remove();
  }
  */
  return {
    field,
    editON,
  };
}
