import buttonAddDeck from "./buttonAddDeck/buttonAddDeck.js";

export default function addDeckSection(onAddDeck) {
  const addDeckSection = document.querySelector("#addDeck");
  const buttonAdd = buttonAddDeck(addDeck);

  function addDeck() {
    onAddDeck();
  }

  function enable() {
    addDeckSection.appendChild(buttonAdd);
    buttonAdd.disabled = false;
  }

  function disable() {
    buttonAdd.remove();
    buttonAdd.disabled = true;
  }

  return {
    enable,
    disable,
  };
}
