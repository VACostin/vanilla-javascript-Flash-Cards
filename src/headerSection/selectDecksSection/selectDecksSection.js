import buttonSelectDecks from "./buttonSelectDecks/buttonSelectDecks.js";
import buttonRemoveDecks from "./buttonRemoveDecks/buttonRemoveDecks.js";

export default function selectDecksSection(onSelectDecks, onRemoveDecks) {
  const selectDecksSection = document.querySelector("#selectDecks");
  const buttonSelect = buttonSelectDecks(selectDecks);
  const buttonRemove = buttonRemoveDecks(removeDecks);

  function selectDecks() {
    onSelectDecks();
    selectDecksSection.removeChild(buttonSelect);
    selectDecksSection.appendChild(buttonRemove);
  }

  function removeDecks() {
    onRemoveDecks();
    selectDecksSection.removeChild(buttonRemove);
    selectDecksSection.appendChild(buttonSelect);
  }
}
