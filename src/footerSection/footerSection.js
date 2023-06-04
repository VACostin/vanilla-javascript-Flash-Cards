import buttonAddFlashCard from "./buttonAddFlashCard/buttonAddFlashCard.js";

export default function footerSection() {

  let addFlashCard;

  function setCallBacks(functionStack) {
    addFlashCard = functionStack.addFlashCard;
  }

  function render() {
    buttonAddFlashCard.init(addFlashCard)
  }

  return {
    setCallBacks,
    render,
  }
}