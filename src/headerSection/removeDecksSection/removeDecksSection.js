import buttonRemoveDecks from "./buttonRemoveDecks/buttonRemoveDecks.js";
import buttonFinishRemoveDecks from "./buttonFinishRemoveDecks/buttonFinishRemoveDecks.js";

export default function removeDecksSection(onRemoveDecks, onFinishRemoveDecks) {
  const removeDecksSection = document.querySelector("#removeDecks");
  const buttonRemove = buttonRemoveDecks(removeDecks);
  const buttonFinishRemove = buttonFinishRemoveDecks(finishRemoveDecks);

  function removeDecks() {
    onRemoveDecks();
    removeDecksSection.removeChild(buttonRemove);
    removeDecksSection.appendChild(buttonFinishRemove);
  }

  function finishRemoveDecks() {
    onFinishRemoveDecks();
    removeDecksSection.removeChild(buttonFinishRemove);
    removeDecksSection.appendChild(buttonRemove);
  }
}
