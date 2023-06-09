import cardFront from "./card/cardFront.js";
import cardBack from "./card/cardBack.js";

export default function cardWrapper(cardObject, getDeckName) {
  const cardWrap = document.createElement("div");
  const cardWrapInner = document.createElement("div");
  const cardFrontHandle = cardFront(cardObject, getDeckName, setCardName);
  const cardBackHandle = cardBack(cardObject, getDeckName, getCardName);
  let cardName = cardObject.title;
  let facingFront = true;
  init();

  function init() {
    const cardFront = cardFrontHandle.card;
    const cardBack = cardBackHandle.card;
    cardWrap.classList.add("cardWrap");
    cardWrapInner.classList.add("cardWrapInner");
    cardWrapInner.appendChild(cardFront);
    cardWrapInner.appendChild(cardBack);
    cardWrap.appendChild(cardWrapInner);
    cardWrap.addEventListener("click", flipCard);
  }

  function setCardName(newCardName) {
    cardName = newCardName;
  }

  function getCardName() {
    return cardName;
  }

  //0: notFlippable 1: Flippable 2: Flippable after clicking again
  //we need this "3 state" flag because we don't want to flip
  //after we finish editing our card info

  function flipCard() {
    if (facingFront) {
      const flipFlag = cardFrontHandle.getFlipFlag();
      switch (flipFlag) {
        case 0:
          break;
        case 1:
          cardWrapInner.style.transform = "rotateY(180deg)";
          facingFront = !facingFront;
          break;
        case 2:
          cardFrontHandle.enableFlip();
          break;
      }
    } else {
      const flipFlag = cardBackHandle.getFlipFlag();
      switch (flipFlag) {
        case 0:
          break;
        case 1:
          cardWrapInner.style.transform = "rotateY(360deg)";
          facingFront = !facingFront;
          break;
        case 2:
          cardBackHandle.enableFlip();
          break;
      }
    }
  }

  return cardWrap;
}
