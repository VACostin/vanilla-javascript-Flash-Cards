import buttonAddDeck from "./buttonAddDeck/buttonAddDeck.js";
import buttonOpenDeck from "./buttonOpenDeck/buttonOpenDeck.js";
import buttonRemoveDeck from "./buttonRemoveDeck/buttonRemoveDeck.js";

export default function headerSection() {
  const bigFunctionStack = new Object();
  const deckSection = document.querySelector("#deckSection");
  const buttonAdd = buttonAddDeck(addDeck);
  const buttonRemove = buttonRemoveDeck(removeDeck);
  const deckList = new Array();
  let deckInFocus;

  function setCallBacks(functionStack) {
    bigFunctionStack.loadFlashCards = functionStack.loadFlashCards;
    bigFunctionStack.disableAllExcept = functionStack.disableAllExcept;
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
    //db query
    const buttonHandle = buttonOpenDeck(deckName, functionStack);
    const button = buttonHandle.button;
    deckSection.appendChild(button);
    deckList.push(buttonHandle);
  }

  function generateName(name) {
    const nameList = getNameList();
    const defaultName = name;
    for (let i = 1; nameList.includes(name); i++) {
      name = defaultName + i;
    }
    return name;
  }

  function getNameList() {
    const nameList = [];
    //db query instead
    const buttons = document.querySelectorAll(".deck");
    buttons.forEach((button) => {
      nameList.push(button.textContent);
    });
    return nameList;
  }

  function setDeckInFocus(deckName) {
    deckInFocus = deckName;
  }

  function getDeckInFocus() {
    return deckInFocus;
  }

  function removeDeck() {
    deckList.forEach((buttonHandle) => buttonHandle.setDeleteMode());
  }

  function changeDeckName(deckNameOld, deckName) {
    if (deckName !== deckNameOld) {
      deckName = generateName(deckName);

      //place holder code, replace
      const oldId = "#buttonDeck_" + deckNameOld;
      const newId = "buttonDeck_" + deckName;
      const button = document.querySelector(oldId);
      button.removeAttribute("id");
      //db query
      button.setAttribute("id", newId);
      button.textContent = deckName;
    }
    return deckName;
  }

  function disableAll() {
    console.log("disabling header");
  }

  return {
    setCallBacks,
    changeDeckName,
    disableAll,
  };
}
