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
    const deckName = db.insertNewDeckObject();
    const handleButtonOpen = buttonOpenDeck(deckName, bigFunctionStack);
    const button = handleButtonOpen.button;
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

  function changeDeckName(deckNameOld, deckName) {
    if (deckName !== deckNameOld) {
      const buttonHandle = getButtonHandle(deckNameOld);
      const deckNameNew = db.updateDeckObject(deckNameOld, deckName);
      buttonHandle.setDeckName(deckNameNew);
      if (deckNameOld == getDeckInFocus()) setDeckInFocus(deckNameNew);
      return deckNameNew;
    }
    return deckName;
  }

  function setDeckInFocus(deckName) {
    deckInFocus = deckName;
  }

  function getDeckInFocus() {
    return deckInFocus;
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
