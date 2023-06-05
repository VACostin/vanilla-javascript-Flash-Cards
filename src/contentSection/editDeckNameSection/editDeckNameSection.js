import buttonCancelEditDeckName from "./buttonCancelEditDeckName/buttonCancelEditDeckName";
import buttonDoneEditDeckName from "./buttonDoneEditDeckName/buttonDoneEditDeckName";
import fieldDeckName from "./fieldDeckName/fieldDeckName";

export default function editDeckNameSection(functionStack) {
  const changeDeckName = functionStack.changeDeckName;
  const fieldEditDeckName = document.querySelector("#fieldEditDeckName");
  const buttonDone = buttonDoneEditDeckName(doneEditDeckName);
  const buttonCancel = buttonCancelEditDeckName(cancelEditDeckName);
  const deckNameField = fieldDeckName(editDeckName, doneEditDeckName);

  function show(deckName) {
    deckNameField.setDeckName(deckName);
    fieldEditDeckName.appendChild(deckNameField.field);
  }

  function reset() {
    fieldEditDeckName.removeChild(deckNameField.field);
    hideButtons();
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
      hideButtons();
    }
  }

  function cancelEditDeckName() {
    deckNameField.setFlag(false);
    deckNameField.resetInput();
    hideButtons();
  }

  function editDeckName() {
    const editFlag = deckNameField.getFlag();
    if (!editFlag) {
      showButtons();
      deckNameField.setFlag(true);
    }
  }

  function showButtons() {
    //fieldEditDeckName.appendChild(buttonDone);
    //fieldEditDeckName.appendChild(buttonCancel);
  }

  function hideButtons() {
    //buttonDone.remove();
    //buttonCancel.remove();
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
