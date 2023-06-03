import buttonAddDeck from "./buttonAddDeck";
import buttonOpenDeck from "./buttonOpenDeck";
import buttonRemoveDeck from "./buttonRemoveDeck";

export default function headerSection() {
  buttonAddDeck.init(addDeck);
  buttonRemoveDeck.init(removeDeck);
  let loadFlashCards;
  let disableAllExcept;

  function setCallBacks(functionStack) {
    loadFlashCards = functionStack.loadFlashCards;
    disableAllExcept = functionStack.disableAllExcept;
  }

  function addDeck() {
    const name = generateName();
    const header = document.querySelector('body');
    const button = buttonOpenDeck(name, loadFlashCards);
    header.appendChild(button);
  }

  function generateName() {
    const nameList = getNameList();
    const defaultName = 'New Deck';
    let name = defaultName
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

  function callbackFunction() {
    console.log('hello');
  }

  function editDeckName() {
    console.log('editing deck name');
  }

  function disableAll() {
    console.log('disabling header');
  }

  return {
    setCallBacks,
    editDeckName,
    disableAll
  }
};