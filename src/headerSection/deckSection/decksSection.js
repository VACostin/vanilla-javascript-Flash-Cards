import buttonOpenDeck from "./buttonOpenDeck/buttonOpenDeck.js";
import deckNameQuerries from "../deckNameQuerries/deckNameQuerries.js";

export default function deckSection(loadFlashCards, showFooter) {
  const deckSection = document.querySelector("#deckSection");
  const db = deckNameQuerries();
  const bigFunctionStack = {
    setDeckInFocus,
    loadFlashCards,
    showFooter,
  };
  let deckList = new Array();
  let deckInFocus = "";

  function addDeck() {
    const defaultName = "NewDeck";
    const deckName = generateName(defaultName);
    const handleButtonOpen = buttonOpenDeck(deckName, bigFunctionStack);
    const button = handleButtonOpen.button;
    db.insertNewDeckObject(deckName);
    deckList.push(handleButtonOpen);
    deckSection.appendChild(button);
  }

  function removeDecks() {
    deckList.forEach((buttonHandle) => {
      buttonHandle.setNormalMode();
      const deleteFlag = buttonHandle.getDeleteFlag();
      if (deleteFlag) removeDeck(buttonHandle);
    });
  }

  function removeDeck(buttonHandle) {
    const button = buttonHandle.button;
    const deckName = buttonHandle.getDeckName();
    db.removeDeckObject(deckName);
    button.remove();
    deckList = deckList.filter((deck) => deck.getDeckName() != deckName); //callback
  }

  function generateName(name) {
    const nameList = db.getAllDeckNames();
    const defaultName = name;
    for (let i = 1; nameList.includes(name); i++) {
      name = defaultName + i;
    }
    return name;
  }

  function changeDeckName(deckNameOld, deckName) {
    if (deckName !== deckNameOld) {
      const buttonHandle = getButtonHandle(deckNameOld);
      const deckNameNew = generateName(deckName);
      db.updateDeckObject(deckNameOld, deckNameNew);
      buttonHandle.setDeckName(deckNameNew);
      if (deckNameOld == getDeckInFocus()) setDeckInFocus(deckNameNew);
    }
    return deckName;
  }

  function setDeckInFocus(deckName) {
    deckInFocus = deckName;
  }

  function getDeckInFocus() {
    return deckName;
  }

  function setDeleteMode() {
    deckList.forEach((buttonHandle) => buttonHandle.setDeleteMode());
  }

  function getButtonHandle(deckName) {
    let myButtonHanndle;
    deckList.forEach((buttonHandle) => {
      if (buttonHandle.getDeckName() == deckName)
        myButtonHanndle = buttonHandle;
    });
    return myButtonHanndle;
  }

  function currentDeckGone() {
    const nameList = db.getAllDeckNames();
    return nameList.includes(deckInFocus);
  }

  return {
    addDeck,
    removeDecks,
    changeDeckName,
    setDeleteMode,
    currentDeckGone,
  };
}
