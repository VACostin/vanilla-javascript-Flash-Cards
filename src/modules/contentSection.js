import editDeckNameSection from "./editDeckNameSection";

export default function contentSection() {
  let disableAllExcept;
  const deckNameField = editDeckNameSection();

  function render() {
    deckNameField.render();
  }

  function setCallBacks(functionStack) {
    disableAllExcept = functionStack.disableAllExcept;
    deckNameField.setCallBacks(functionStack);
  }

  function loadFlashCards(deckName) {
    console.log('loadingFlashCards for ' + deckName);
  }

  function addFlashCard() {
    console.log('addingFlashCard');
  }

  return {
    render,
    setCallBacks,
    loadFlashCards,
    addFlashCard,
  }
}