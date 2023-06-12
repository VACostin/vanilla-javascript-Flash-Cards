import addDeckSection from "./addDeckSection/addDeckSection";
import deckSection from "./deckSection/decksSection";
import removeDecksSection from "./removeDecksSection/removeDecksSection";
import deckThemeSection from "./deckThemeSection/deckThemeSection";

export default function headerSection() {
  const header = document.querySelector("#header");
  const bigFunctionStack = new Object();
  const handleDeckSection = deckSection(openDeck);
  const handleDeckThemeSection = deckThemeSection();
  const handleAddDeckSection = addDeckSection(addDeck);
  const handleRemoveDecksSection = removeDecksSection(selectDecks, removeDecks);

  function setCallBacks(functionStack) {
    bigFunctionStack.loadFlashCards = functionStack.loadFlashCards;
    bigFunctionStack.hideContent = functionStack.hideContent;
    bigFunctionStack.toggleAllExcept = functionStack.toggleAllExcept;
    bigFunctionStack.footer = functionStack.footer;
  }

  function addDeck() {
    handleDeckSection.addDeck();
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
  }

  function disableAll() {
    header.style.pointerEvents = "none";
  }

  function selectDecks() {
    const toggleAllExcept = bigFunctionStack.toggleAllExcept;
    const disableButtonTheme = handleDeckThemeSection.disable;
    const disableButtonAdd = handleAddDeckSection.disable;
    const setDeleteMode = handleDeckSection.setDeleteMode;
    toggleAllExcept("header");
    disableButtonTheme();
    disableButtonAdd();
    setDeleteMode();
  }

  function removeDecks() {
    const toggleAllExcept = bigFunctionStack.toggleAllExcept;
    const enableButtonTheme = handleDeckThemeSection.enable;
    const enableButtonAdd = handleAddDeckSection.enable;
    const onRemoveDecks = handleDeckSection.removeDecks;
    toggleAllExcept("header");
    enableButtonTheme();
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
