import editDeckNameSection from "./editDeckNameSection/editDeckNameSection.js";
import cardsSection from "./cardsSection/cardsSection.js";

export default function contentSection(functionStack) {
  const content = document.querySelector("#content");
  const deckNameField = editDeckNameSection(functionStack);
  const getDeckName = deckNameField.getDeckName;
  const cardsField = cardsSection(getDeckName);

  function loadFlashCards(deckName) {
    cardsField.reset();
    deckNameField.show(deckName);
    cardsField.load(deckName);
  }

  function addFlashCard() {
    cardsField.addCard();
  }

  function disable() {
    console.log("content section disabled");
  }

  return {
    loadFlashCards,
    addFlashCard,
  };
}
