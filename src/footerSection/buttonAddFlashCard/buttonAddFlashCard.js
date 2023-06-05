export default function buttonAddFlashCard(addFlashCard) {
  const button = document.querySelector("#buttonAddFlashCard");
  button.addEventListener("click", () => addFlashCard());
  return button;
}
