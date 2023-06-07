import buttonAddFlashCard from "./buttonAddFlashCard/buttonAddFlashCard.js";

export default function footerSection(functionStack) {
  const addFlashCard = functionStack.addFlashCard;
  const footer = document.querySelector("#footer");
  const buttonAdd = buttonAddFlashCard(addFlashCard);

  function show() {
    footer.appendChild(buttonAdd);
  }

  function hide() {
    buttonAdd.remove();
  }

  function enableAll() {
    show();
    footer.style.pointerEvents = "auto";
    footer.style.backgroundColor = "white";
  }

  function disableAll() {
    hide();
    footer.style.pointerEvents = "none";
    footer.style.backgroundColor = "black";
  }

  return {
    show,
    hide,
    enableAll,
    disableAll,
  };
}
