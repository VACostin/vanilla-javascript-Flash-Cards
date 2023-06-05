export default function buttonRemoveCard(removeCard) {
  const button = document.createElement("button");

  button.classList.add("buttonRemoveCard");
  button.textContent = "X";
  button.addEventListener("click", () => removeCard());

  return button;
}
