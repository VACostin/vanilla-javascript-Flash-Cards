import buttonCancelEditDeckName from "./buttonCancelEditDeckName/buttonCancelEditDeckName";
import buttonDoneEditDeckName from "./buttonDoneEditDeckName/buttonDoneEditDeckName";
import fieldDeckName from "./fieldDeckName/fieldDeckName";

export default function editDeckNameSection() {

  const fieldEditDeckName = document.querySelector('#fieldEditDeckName');
  let currentDeckName = '';
  let changeDeckName
  let editingFlag = false;

  function render() {
    buttonDoneEditDeckName.init(doneEditDeckName)
    buttonCancelEditDeckName.init(cancelEditDeckName);
    fieldDeckName.init(editDeckName);
  }

  function show(deckName) {
    fieldDeckName.show(fieldEditDeckName)
    fieldDeckName.setDeckName(deckName);
  }

  function setCallBacks(functionStack) {
    changeDeckName = functionStack.changeDeckName;
  }

  function doneEditDeckName() {
    if (2 > 1) //isvalid
    {
      editingFlag = false;
      let deckName = fieldDeckName.getDeckName();
      deckName = changeDeckName(currentDeckName, deckName);
      fieldDeckName.setDeckName(deckName);
      hideButtons();
    }
  }

  function cancelEditDeckName() {
    editingFlag = false;
    fieldDeckName.setDeckName(currentDeckName);
    hideButtons();
  }

  function editDeckName() {
    if (!editingFlag) {
      currentDeckName = fieldDeckName.getDeckName();
      showButtons();
    }
    editingFlag = true;
  }

  function showButtons() {
    buttonDoneEditDeckName.show(fieldEditDeckName);
    buttonCancelEditDeckName.show(fieldEditDeckName);
  }

  function hideButtons() {
    buttonDoneEditDeckName.hide();
    buttonCancelEditDeckName.hide();
  }

  function getDeckName() {
    return fieldDeckName.getDeckName();
  }

  return {
    render,
    show,
    getDeckName,
    setCallBacks,
  }
}