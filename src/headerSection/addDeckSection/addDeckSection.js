import buttonAddDeck from "./buttonAddDeck/buttonAddDeck.js";
import deckNameQuerries from "../deckNameQuerries/deckNameQuerries.js";

export default function addDeckSection(onAddDeck) {
  const addDeckSection = document.querySelector("#addDeck");
  const buttonAdd = buttonAddDeck(addDeck);
  const db = deckNameQuerries();

  function addDeck() {
    onAddDeck();
  }

  function enable() {
    addDeckSection.appendChild(buttonAdd);
    addDeckSection.style.backgroundColor = "white";
    buttonAdd.disabled = true;
  }

  function disable() {
    buttonAdd.remove();
    addDeckSection.style.backgroundColor = "black";
    buttonAdd.disabled = false;
  }

  return {
    enable,
    disable,
  };
}
