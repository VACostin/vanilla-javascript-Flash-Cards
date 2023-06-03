import buttonEditCard from "./buttonEditCard";
import buttonRemoveCard from "./buttonRemoveCard";

export default function contentSection() {

  let editDeckName;
  let disableAllExcept;

  function setCallBacks(functionStack) {
    let editDeckName = functionStack.editDeckName;
    let disableAllExcept = functionStack.disableAllExcept;
  }

  function loadFlashCards(deckName) {
    console.log('loadingFlashCards for ' + deckName);
  }

  function addFlashCard() {
    console.log('addingFlashCard');
  }

  return {
    setCallBacks,
    loadFlashCards,
    addFlashCard
  }
}