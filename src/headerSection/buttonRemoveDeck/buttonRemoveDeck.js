export default function buttonRemoveDeck(removeDeck) {
  const button = document.querySelector("#buttonRemoveDeck");
  button.addEventListener("click", () => removeDeck());
  return button;
}
