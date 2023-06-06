import cardFace from "./cardFace/cardFace.js";

export default function cardWrapper(name, description) {
  const cardWrap = document.createElement("div");
  const cardWrapInner = document.createElement("div");
  const handleCardFront = cardFace(name);
  const handleCardBack = cardFace(description);
  const cardFront = handleCardFront.card;
  const cardBack = handleCardBack.card;
  cardWrap.classList.add("cardWrap");
  cardWrapInner.classList.add("cardWrapInner");
  cardFront.classList.add("cardFront");
  cardBack.classList.add("cardBack");
  cardWrapInner.appendChild(cardFront);
  cardWrapInner.appendChild(cardBack);
  cardWrap.appendChild(cardWrapInner);
  let facingFront = true;
  cardWrap.addEventListener("click", flip);

  //0: notFlippable 1: Flippable 2: Flippable after clicking again
  //we need this "3 state" flag because we don't want to flip
  //after we finish editing our card info

  function flip() {
    if (facingFront) {
      const flipFlag = handleCardFront.getFlipFlag();
      switch (flipFlag) {
        case 0:
          break;
        case 1:
          cardWrapInner.style.transform = "rotateY(180deg)";
          facingFront = !facingFront;
          break;
        case 2:
          handleCardFront.enableFlip();
          break;
      }
    } else {
      const flipFlag = handleCardBack.getFlipFlag();
      switch (flipFlag) {
        case 0:
          break;
        case 1:
          cardWrapInner.style.transform = "rotateY(360deg)";
          facingFront = !facingFront;
          break;
        case 2:
          handleCardBack.enableFlip();
          break;
      }
    }
  }

  return cardWrap;
}
