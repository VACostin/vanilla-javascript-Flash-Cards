import editDeckNameSection from "./editDeckNameSection/editDeckNameSection.js";
import cardsSection from "./cardsSection/cardsSection.js";

export default function contentSection() {
  let disableAllExcept;
  const content = document.querySelector('#content');
  const deckNameField = editDeckNameSection();
  const cards = cardsSection();

  function render() {
    deckNameField.render();
    cards.render();
  }

  function setCallBacks(functionStack) {
    disableAllExcept = functionStack.disableAllExcept;
    deckNameField.setCallBacks(functionStack);
  }

  function loadFlashCards(deckName) {
    cards.reset();
    deckNameField.show(deckName);
    cards.load(deckName);    
  }

  function addFlashCard() {
    const deckName = deckNameField.getDeckName();
    cards.addCard(deckName);
  }

  return {
    render,
    loadFlashCards,
    setCallBacks,
    addFlashCard,
  }
}