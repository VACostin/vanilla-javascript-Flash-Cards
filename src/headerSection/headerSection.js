import buttonAddDeck from "./buttonAddDeck/buttonAddDeck.js";
import buttonOpenDeck from "./buttonOpenDeck/buttonOpenDeck.js";
import buttonRemoveDeck from "./buttonRemoveDeck/buttonRemoveDeck.js";

export default function headerSection() {
  const bigFunctionStack = new Object();
  const deckList = document.querySelector("#deckList");
  const buttonAdd = buttonAddDeck(addDeck);
  const buttonRemove = buttonRemoveDeck(removeDeck);

  function setCallBacks(functionStack) {
    bigFunctionStack.loadFlashCards = functionStack.loadFlashCards;
    bigFunctionStack.disableAllExcept = functionStack.disableAllExcept;
    bigFunctionStack.footer = functionStack.footer;
  }

  function addDeck() {
    const loadFlashCards = bigFunctionStack.loadFlashCards;
    const showFooter = bigFunctionStack.footer.show;
    const functionStack = {
      loadFlashCards,
      showFooter,
    };
    const defaultName = "NewDeck";
    const deckName = generateName(defaultName);
    //db query
    const header = document.querySelector("#header");
    const button = buttonOpenDeck(deckName, functionStack);
    deckList.appendChild(button);
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
    const buttons = document.querySelectorAll(".buttonDeck");
    buttons.forEach((button) => {
      nameList.push(button.textContent);
    });
    return nameList;
  }

  function removeDeck() {
    console.log("removed deck");
  }

  function changeDeckName(deckNameOld, deckName) {
    if (deckName !== deckNameOld) {
      deckName = generateName(deckName);
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
