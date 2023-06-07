import fieldCardName from "./fieldCardName/fieldCardName.js";

export default function fieldEditCardText(name, updateDeckEntry) {

  const field = document.createElement("div");
  const fieldName = fieldCardName(name, onFinishEditCard);
  field.classList.add("fieldEditCardText");
  field.appendChild(fieldName);

  function editON() {
    fieldName.contentEditable = true;
    fieldName.focus();
    fieldName.style.outline = "2px solid black";
  }

  function onFinishEditCard() {
    let name = fieldName.textContent;
    const newCardName = updateDeckEntry(name);
    editOFF(newCardName);
  }

  function editOFF(name) {
    fieldName.textContent = name;
    fieldName.contentEditable = false;
    fieldName.style.outline = "none";
  }

  return {
    field,
    editON,
  };
}
