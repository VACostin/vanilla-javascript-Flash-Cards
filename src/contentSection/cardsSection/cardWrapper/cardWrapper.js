import fieldCard from "./fieldCard/fieldCard.js";

export default function cardWrapper(name, description) {
  const cardWrap = document.createElement("div");
  const cardWrapInner = document.createElement("div");
  const fieldCardFront = fieldCard(name);
  const fieldCardBack = fieldCard(description);
  const cardFront = fieldCardFront.card;
  const cardBack = fieldCardBack.card;
  cardFront.classList.add("cardFront");
  cardBack.classList.add("cardBack");
  cardWrap.classList.add("cardWrap");
  cardWrapInner.classList.add("cardWrapInner");
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
      const flipFlag = fieldCardFront.getFlipFlag();
      switch (flipFlag) {
        case 0:
          break;
        case 1:
          cardWrapInner.style.transform = "rotateY(180deg)";
          facingFront != facingFront;
          console.log('flipping');
          break;
        case 2:
          fieldCardFront.enableFlip();
          break;
      }
    } else {
      const flipFlag = fieldCardBack.getFlipFlag();
      switch (flipFlag) {
        case 0:
          break;
        case 1:
          cardWrapInner.style.transform = "rotateY(360deg)";
          facingFront != facingFront;
          console.log('flipping2');
          break;
        case 2:
          fieldCardBack.enableFlip();
          break;
      }
    }
  }

  return cardWrap;
}
