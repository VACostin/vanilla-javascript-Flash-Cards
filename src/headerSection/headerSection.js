import buttonAddDeck from "./buttonAddDeck/buttonAddDeck.js";
import buttonOpenDeck from "./buttonOpenDeck/buttonOpenDeck.js";
import buttonSelectDecks from "./buttonSelectDecks/buttonSelectDecks.js";
import buttonRemoveDecks from "./buttonRemoveDecks/buttonRemoveDecks.js";
import deckNameQuerries from "./deckNameQuerries/deckNameQuerries.js";

export default function headerSection() {
  localStorage.clear();
  const header = document.querySelector("#header");
  const bigFunctionStack = new Object();
  const deckSection = document.querySelector("#deckSection");
  const addDeckSection = document.querySelector("#addDeck");
  const selectDecksSection = document.querySelector("#selectDecks");
  const buttonAdd = buttonAddDeck(addDeck);
  const buttonSelect = buttonSelectDecks(selectDecks);
  const buttonRemove = buttonRemoveDecks(removeDecks);
  const deckList = new Array();
  const db = deckNameQuerries();
  let deckInFocus;

  function setCallBacks(functionStack) {
    bigFunctionStack.loadFlashCards = functionStack.loadFlashCards;
    bigFunctionStack.hideContent = functionStack.hideContent;
    bigFunctionStack.toggleAllExcept = functionStack.toggleAllExcept;
    bigFunctionStack.footer = functionStack.footer;
  }

  function addDeck() {
    const loadFlashCards = bigFunctionStack.loadFlashCards;
    const showFooter = bigFunctionStack.footer.show;
    const functionStack = {
      setDeckInFocus,
      loadFlashCards,
      showFooter,
    };
    const defaultName = "NewDeck";
    const deckName = generateName(defaultName);
    const deckObject = {};
    db.insertDeckObject(deckName, deckObject);
    const buttonHandle = buttonOpenDeck(deckName, functionStack);
    const button = buttonHandle.button;
    deckSection.appendChild(button);
    deckList.push(buttonHandle);
  }

  function generateName(name) {
    const nameList = db.getAllDeckNames();
    const defaultName = name;
    for (let i = 1; nameList.includes(name); i++) {
      name = defaultName + i;
    }
    return name;
  }

  function setDeckInFocus(deckName) {
    deckInFocus = deckName;
  }

  function getDeckInFocus() {
    return deckInFocus;
  }

  function selectDecks() {
    const toggleAllExcept = bigFunctionStack.toggleAllExcept;
    toggleAllExcept("header");
    disableButonnAdd();
    buttonAdd.disabled = true;
    deckList.forEach((buttonHandle) => buttonHandle.setDeleteMode());
    selectDecksSection.removeChild(buttonSelect);
    selectDecksSection.appendChild(buttonRemove);
  }

  function removeDecks() {
    const toggleAllExcept = bigFunctionStack.toggleAllExcept;
    toggleAllExcept("header");
    enableButtonAdd();
    buttonAdd.disabled = false;
    deckList.forEach((buttonHandle) => {
      buttonHandle.setNormalMode();
      const deleteFlag = buttonHandle.getDeleteFlag();
      if (deleteFlag) removeDeck(buttonHandle);
    });
    selectDecksSection.removeChild(buttonRemove);
    selectDecksSection.appendChild(buttonSelect);
    resetDeckView();
  }

  function enableButtonAdd() {
    addDeckSection.appendChild(buttonAdd);
    addDeckSection.style.backgroundColor = "white";
  }

  function disableButonnAdd() {
    buttonAdd.remove();
    addDeckSection.style.backgroundColor = "black";
  }

  function removeDeck(buttonHandle) {
    const button = buttonHandle.button;
    const deckName = buttonHandle.getDeckName();
    db.removeDeckObject(deckName);
    button.remove();
  }

  function resetDeckView() {
    const nameList = db.getAllDeckNames();
    if (!nameList.includes(deckInFocus))
    {
      bigFunctionStack.hideContent();
      bigFunctionStack.footer.hide();
    }
  }

  function changeDeckName(deckNameOld, deckName) {
    if (deckName !== deckNameOld) {
      const button = buttonHandle.button;
      deckName = generateName(deckName);
      db.updateDeckObject(deckNameOld, deckName);
      button.textContent = deckName;
    }
    return deckName;
  }

  function enableAll() {
    header.style.pointerEvents = "auto";
    header.style.backgroundColor = "white";
  }

  function disableAll() {
    header.style.pointerEvents = "none";
    header.style.backgroundColor = "black";
  }

  return {
    setCallBacks,
    changeDeckName,
    enableAll,
    disableAll,
  };
}
