import cardWrapper from "./cardWrapper/cardWrapper.js";
import cardQuerries from "./cardWrapper/card/cardFace/cardQuerries/cardQuerries.js";
import buttonArrowLeft from "./buttonArrowLeft/buttonArrowLeft.js";
import buttonArrowRight from "./buttonArrowRight/buttonArrowRight.js";

export default function cardsSection(getDeckNameHandle) {
  const fieldCards = document.querySelector("#fieldCards");
  const getDeckName = getDeckNameHandle;
  const buttonLeft = buttonArrowLeft(scrollLeft);
  const buttonRight = buttonArrowRight(scrollRight);
  const db = cardQuerries();

  function loadCards() {
    const deckName = getDeckName();
    const cardObjects = db.getAllCardObjects(deckName);
    showArrows();
    cardObjects.forEach((cardObject) => {
      const cardWrap = cardWrapper(cardObject, getDeckName);
      fieldCards.appendChild(cardWrap);
    });
  }

  function reset() {
    hideArrows();
    while (fieldCards.lastChild) {
      let div = fieldCards.lastChild;
      try {
        if (div.getAttribute("id") != "rightArrow")
          fieldCards.removeChild(fieldCards.lastChild);
        else break;
      } catch (error) {
        fieldCards.removeChild(fieldCards.lastChild);
      }
    }
  }

  function addCard() {
    const deckName = getDeckName();
    const cardObject = db.insertCardObject(deckName);
    const cardWrap = cardWrapper(cardObject, getDeckName);
    fieldCards.appendChild(cardWrap);
    cardWrap.scrollIntoView();
  }

  function show() {
    showArrows();
    const cardButtons = ["buttonEditCard", "buttonRemoveCard"];
    cardButtons.forEach((buttonType) => enableButtons(buttonType));
  }

  function hide() {
    hideArrows();
    const cardButtons = ["buttonEditCard", "buttonRemoveCard"];
    cardButtons.forEach((buttonType) => disableButtons(buttonType));
  }

  function showArrows() {
    buttonLeft.style.visibility = "visible";
    buttonRight.style.visibility = "visible";
  }

  function hideArrows() {
    buttonLeft.style.visibility = "hidden";
    buttonRight.style.visibility = "hidden";
  }

  function enableButtons(className) {
    const buttons = document.querySelectorAll("." + className);
    buttons.forEach((button) => (button.style.display = "inline-block"));
  }

  function disableButtons(className) {
    const buttons = document.querySelectorAll("." + className);
    buttons.forEach((button) => (button.style.display = "none"));
  }

  function scrollLeft() {
    fieldCards.scrollLeft -= fieldCards.offsetWidth;
  }

  function scrollRight() {
    fieldCards.scrollLeft += fieldCards.offsetWidth;
  }

  return {
    loadCards,
    reset,
    addCard,
    show,
    hide,
  };
}
