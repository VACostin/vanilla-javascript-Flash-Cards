export default function fieldDeckName(callbackFunction, callbackFunction2) {
  let deckName = "";
  let editFlag = false;
  const field = document.createElement("p");

  function getInput() {
    return field.textContent;
  }

  function resetInput() {
    field.textContent = deckName;
  }

  function getDeckName() {
    return deckName;
  }

  function setDeckName(name) {
    deckName = name;
    field.textContent = name;
  }

  function setFlag(boolean) {
    editFlag = boolean;
    field.contentEditable = editFlag;
    if (editFlag) field.focus();
    else field.blur();
  }

  function getFlag() {
    return editFlag;
  }

  field.setAttribute("id", "fieldDeckName");
  field.addEventListener("click", () => callbackFunction());
  field.addEventListener("blur", () => callbackFunction2());
  
  return {
    field,
    setFlag,
    getFlag,
    getInput,
    resetInput,
    getDeckName,
    setDeckName,
  };
}
