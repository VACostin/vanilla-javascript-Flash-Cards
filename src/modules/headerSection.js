import buttonAddDeck from "./buttonAddDeck";
import buttonOpenDeck from "./buttonOpenDeck";
import buttonRemoveDeck from "./buttonRemoveDeck";

export default function headerSection() {
  let loadFlashCards;
  let disableAllExcept;

  function setCallBacks(functionStack) {
    loadFlashCards = functionStack.loadFlashCards;
    disableAllExcept = functionStack.disableAllExcept;
  }

  function render() {
    buttonAddDeck.init(addDeck);
    buttonRemoveDeck.init(removeDeck);
  }

  function addDeck() {
    const name = generateName('NewDeck');
    const header = document.querySelector('body');
    const button = buttonOpenDeck(name, loadFlashCards);
    header.appendChild(button);
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
    const buttons = document.querySelectorAll('.buttonDeck');
    buttons.forEach(button => {
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
      const oldId = '#buttonDeck_' + deckNameOld;
      const newId = 'buttonDeck_' + deckName;
      const button = document.querySelector(oldId);
      button.removeAttribute('id');
      button.setAttribute('id', newId);
      button.textContent = deckName;
    }
    return deckName;
  }

  function disableAll() {
    console.log('disabling header');
  }

  return {
    setCallBacks,
    render,
    changeDeckName,
    disableAll,
  }
};