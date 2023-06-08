import fieldDeckName from "./fieldDeckName/fieldDeckName";

export default function editDeckNameSection(onChangeDeckName) {
  const changeDeckName = onChangeDeckName;
  const fieldEditDeckName = document.querySelector("#fieldEditDeckName");
  const deckNameField = fieldDeckName(editDeckName, doneEditDeckName);

  function show(deckName) {
    deckNameField.setDeckName(deckName);
    fieldEditDeckName.appendChild(deckNameField.field);
  }

  function reset() {
    if(fieldEditDeckName.firstChild)
      fieldEditDeckName.removeChild(fieldEditDeckName.firstChild);
  }

  function doneEditDeckName() {
    const editFlag = deckNameField.getFlag();
    if (editFlag) {
      //&&isvalidinput
      deckNameField.setFlag(false);
      const oldDeckName = deckNameField.getDeckName();
      const newDeckName = deckNameField.getInput();
      const deckName = changeDeckName(oldDeckName, newDeckName);
      deckNameField.setDeckName(deckName);
    }
  }

  function editDeckName() {
    const editFlag = deckNameField.getFlag();
    if (!editFlag) {
      deckNameField.setFlag(true);
    }
  }

  function getDeckName() {
    return deckNameField.getDeckName();
  }

  return {
    show,
    reset,
    getDeckName,
  };
}
