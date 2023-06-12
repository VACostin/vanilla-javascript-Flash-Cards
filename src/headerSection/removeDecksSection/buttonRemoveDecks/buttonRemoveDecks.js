export default function buttonRemoveDecks(onRemoveDecks) {
  const button = document.querySelector("#buttonRemoveDecks");
  button.addEventListener("click", () => onRemoveDecks());
  return button;
}
