export default function buttonAddDeck(addDeck) {
  const button = document.querySelector("#buttonAddDeck");
  button.addEventListener("click", () => addDeck());
  return button;
}
