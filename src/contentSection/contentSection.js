import editDeckNameSection from "./editDeckNameSection/editDeckNameSection.js";
import cardsSection from "./cardsSection/cardsSection.js";

export default function contentSection(onChangeDeckName) {
  const content = document.querySelector("#content");
  const deckNameField = editDeckNameSection(onChangeDeckName);
  const getDeckName = deckNameField.getDeckName;
  const cardsSectionHandle = cardsSection(getDeckName);

  function hide() {
    deckNameField.reset();
    cardsSectionHandle.reset();
  }

  function loadFlashCards(deckName) {
    deckNameField.show(deckName);
    cardsSectionHandle.reset();
    cardsSectionHandle.loadCards();
  }

  function addFlashCard() {
    cardsSectionHandle.addCard();
  }

  function enableAll() {
    content.style.pointerEvents = "auto";
    content.style.backgroundColor = "white";
  }

  function disableAll() {
    content.style.pointerEvents = "none";
    content.style.backgroundColor = "black";
  }

  return {
    hide,
    loadFlashCards,
    addFlashCard,
    enableAll,
    disableAll,
  };
}
