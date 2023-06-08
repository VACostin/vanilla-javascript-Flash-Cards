import imageRedX from "./Red_X.svg";

export default function buttonOpenDeck(name, onOpenDeck) {
  let deckName = name;
  let deleteFlag = false;
  const button = document.createElement("button");
  init();

  function init() {
    button.classList.add("deck");
    button.setAttribute("id", "buttonDeck_" + deckName);
    button.textContent = deckName;
    setNormalMode();
  }

  function getDeckName() {
    return deckName;
  }

  function setDeckName(name) {
    deckName = name;
    button.textContent = deckName;
  }

  function setNormalMode() {
    button.addEventListener("click", openDeck);
    button.removeEventListener("click", markForDelete);
  }

  function setDeleteMode() {
    button.removeEventListener("click", openDeck);
    button.addEventListener("click", markForDelete);
  }

  function openDeck() {
    onOpenDeck(deckName);
  }

  function markForDelete() {
    if (deleteFlag) button.style.backgroundImage = "none";
    else button.style.backgroundImage = "url(" + imageRedX + ")";
    deleteFlag = !deleteFlag;
  }

  function getDeleteFlag() {
    return deleteFlag;
  }

  return {
    button,
    getDeckName,
    setDeckName,
    setNormalMode,
    setDeleteMode,
    getDeleteFlag,
  };
}
