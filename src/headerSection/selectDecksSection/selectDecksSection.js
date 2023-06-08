import buttonSelectDecks from "./buttonSelectDecks/buttonSelectDecks.js";
import buttonRemoveDecks from "./buttonRemoveDecks/buttonRemoveDecks.js";

export default function selectDecksSection(getCallbacks) {
  const selectDecksSection = document.querySelector("#selectDecks");
  const buttonSelect = buttonSelectDecks(selectDecks);
  const buttonRemove = buttonRemoveDecks(removeDecks);

  function selectDecks() {
    const functionStack = getCallbacks();
    const toggleAllExcept = functionStack.toggleAllExcept;
    const disableButtonAdd = functionStack.disableButtonAdd;
    const setDeleteMode = functionStack.setDeleteMode;
    toggleAllExcept("header");
    disableButtonAdd();
    setDeleteMode();
    selectDecksSection.removeChild(buttonSelect);
    selectDecksSection.appendChild(buttonRemove);
  }

  function removeDecks() {
    const functionStack = getCallbacks();
    const toggleAllExcept = functionStack.toggleAllExcept;
    const enableButtonAdd = functionStack.enableButtonAdd;
    const onRemoveDecks = functionStack.removeDecks;
    const resetDeckView = functionStack.resetDeckView;
    toggleAllExcept("header");
    enableButtonAdd();
    onRemoveDecks();
    selectDecksSection.removeChild(buttonRemove);
    selectDecksSection.appendChild(buttonSelect);
    resetDeckView();
  }
}
