export default function buttonAddDeck(onAddDeck) {
  const button = document.querySelector("#buttonAddDeck");
  button.addEventListener("click", () => onAddDeck());
  return button;
}
