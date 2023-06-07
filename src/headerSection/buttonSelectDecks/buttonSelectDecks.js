export default function buttonSelectDecks(selectDecks) {
  const button = document.querySelector("#buttonSelectDecks");
  button.addEventListener("click", () => selectDecks());
  return button;
}
