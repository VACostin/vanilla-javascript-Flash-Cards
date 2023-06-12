export default function fieldDeckName(onEditDeckName, onDoneEditDeckName) {
  let deckName = "";
  let editFlag = false;
  const field = document.createElement("p");
  init();

  function init() {
    field.setAttribute("id", "fieldDeckName");
    field.addEventListener("click", () => onEditDeckName());
    ["blur", "focusout"].forEach((event) =>
      field.addEventListener(event, () => onDoneEditDeckName())
    );
    field.addEventListener("keyup", (event) => {
      if (event.key === "Enter") onDoneEditDeckName();
    });
  }

  function getInput() {
    return field.textContent;
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

  return {
    field,
    setFlag,
    getFlag,
    getInput,
    getDeckName,
    setDeckName,
  };
}
