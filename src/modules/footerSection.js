export default function footerSection() {

  let addFlashCard;
  let disableAllExcept;

  function setCallBacks(functionStack) {
    addFlashCard = functionStack.addFlashCard;
    disableAllExcept = functionStack.disableAllExcept;
  }
}