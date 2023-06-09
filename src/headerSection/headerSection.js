import addDeckSection from "./addDeckSection/addDeckSection";
import deckSection from "./deckSection/decksSection";
import selectDecksSection from "./selectDecksSection/selectDecksSection";

export default function headerSection() {
  localStorage.clear();
  const header = document.querySelector("#header");
  const bigFunctionStack = new Object();
  const handleDeckSection = deckSection(openDeck);
  const handleAddDeckSection = addDeckSection(addDeck);
  const handleSelectDecksSection = selectDecksSection(selectDecks, removeDecks);

  function setCallBacks(functionStack) {
    bigFunctionStack.loadFlashCards = functionStack.loadFlashCards;
    bigFunctionStack.hideContent = functionStack.hideContent;
    bigFunctionStack.toggleAllExcept = functionStack.toggleAllExcept;
    bigFunctionStack.footer = functionStack.footer;
  }

  function addDeck() {
    handleDeckSection.addDeck();
  }

  function toggleAllExcept(section) {
    bigFunctionStack.toggleAllExcept(section);
  }

  function changeDeckName(deckNameOld, deckName) {
    return handleDeckSection.changeDeckName(deckNameOld, deckName);
  }

  function openDeck(deckName) {
    loadFlashCards(deckName);
    showFooter();
  }

  function loadFlashCards(deckName) {
    bigFunctionStack.loadFlashCards(deckName);
  }

  function showFooter() {
    bigFunctionStack.footer.show();
  }

  function resetDeckView() {
    if (handleDeckSection.currentDeckGone()) {
      bigFunctionStack.hideContent();
      bigFunctionStack.footer.hide();
    }
  }

  function enableAll() {
    header.style.pointerEvents = "auto";
    header.style.backgroundColor = "white";
  }

  function disableAll() {
    header.style.pointerEvents = "none";
    header.style.backgroundColor = "black";
  }

  function selectDecks() {
    const toggleAllExcept = bigFunctionStack.toggleAllExcept;
    const disableButtonAdd = handleAddDeckSection.disable;
    const setDeleteMode = handleDeckSection.setDeleteMode;
    toggleAllExcept("header");
    disableButtonAdd();
    setDeleteMode();
  }

  function removeDecks() {
    const toggleAllExcept = bigFunctionStack.toggleAllExcept;
    const enableButtonAdd = handleAddDeckSection.enable;
    const onRemoveDecks = handleDeckSection.removeDecks;
    toggleAllExcept("header");
    enableButtonAdd();
    onRemoveDecks();
    resetDeckView();
  }

  return {
    setCallBacks,
    changeDeckName,
    enableAll,
    disableAll,
  };
}
