import addDeckSection from "./addDeckSection/addDeckSection";
import deckSection from "./deckSection/decksSection";
import deckSection from "./deckSection/decksSection";
import selectDecksSection from "./selectDecksSection/selectDecksSection";

export default function headerSection() {
  localStorage.clear();
  const header = document.querySelector("#header");
  const bigFunctionStack = new Object();
  const handleDeckSection = deckSection(loadFlashCards, showFooter);
  const handleAddDeckSection = addDeckSection(addDeck);
  const handleSelectDecksSection = selectDecksSection(getSelectDecksCallBacks);

  function setCallBacks(functionStack) {
    deckSectionCallBacks = {};
    bigFunctionStack.loadFlashCards = functionStack.loadFlashCards;
    bigFunctionStack.hideContent = functionStack.hideContent;
    bigFunctionStack.toggleAllExcept = functionStack.toggleAllExcept;
    bigFunctionStack.footer = functionStack.footer;
  }

  function addDeck() {
    handleDeckSection.addDeck();
  }

  function loadFlashCards() {
    bigFunctionStack.loadFlashCards();
  }

  function showFooter() {
    bigFunctionStack.showFooter();
  }

  function getSelectDecksCallBacks() {
    const toggleAllExcept = bigFunctionStack.toggleAllExcept;
    const enableButtonAdd = handleAddDeckSection.enable;
    const disableButonnAdd = handleAddDeckSection.disable;
    const setDeleteMode = handleDeckSection.setDeleteMode;
    const removeDecks = handleDeckSection.removeDecks;

    const functionStack = {
      toggleAllExcept,
      enableButtonAdd,
      disableButonnAdd,
      setDeleteMode,
      removeDecks,
      resetDeckView,
    };

    return functionStack;
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

  return {
    setCallBacks,
    changeDeckName,
    enableAll,
    disableAll,
  };
}
