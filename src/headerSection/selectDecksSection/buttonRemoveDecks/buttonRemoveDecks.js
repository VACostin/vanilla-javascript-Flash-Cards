export default function buttonRemoveDecks(removeDecks) {
  const button = document.createElement("button");
  button.setAttribute("id", "buttonRemoveDecks");
  button.textContent = "Remove Decks";
  button.addEventListener("click", () => removeDecks());
  return button;
}
