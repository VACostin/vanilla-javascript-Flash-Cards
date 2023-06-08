import fieldCardName from "./fieldCardName/fieldCardName.js";

export default function fieldEditCardText(textInput, onUpdateDeckEntry) {

  const field = document.createElement("div");
  const fieldName = fieldCardName(textInput, finishEditCard);
  field.classList.add("fieldEditCardText");
  field.appendChild(fieldName);

  function editON() {
    fieldName.contentEditable = true;
    fieldName.focus();
    fieldName.style.outline = "2px solid black";
  }

  function finishEditCard() {
    const textInput = fieldName.textContent;
    const processedTextInput = onUpdateDeckEntry(textInput);
    editOFF(processedTextInput);
  }

  function editOFF(newText) {
    fieldName.textContent = newText;
    fieldName.contentEditable = false;
    fieldName.style.outline = "none";
  }

  return {
    field,
    editON,
  };
}
