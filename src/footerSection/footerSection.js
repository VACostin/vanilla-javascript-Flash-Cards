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

  function disable() {
    console.log("disabled footer");
  }

  return {
    show,
    hide,
    disable,
  };
}
