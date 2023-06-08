export default function buttonAddFlashCard(onAddFlashCard) {
  const button = document.querySelector("#buttonAddFlashCard");
  button.addEventListener("click", () => onAddFlashCard());
  return button;
}
