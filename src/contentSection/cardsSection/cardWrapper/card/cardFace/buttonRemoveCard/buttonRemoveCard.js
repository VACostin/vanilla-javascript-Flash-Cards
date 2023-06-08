export default function buttonRemoveCard(onRemoveCard) {
  const button = document.createElement("button");

  button.classList.add("buttonRemoveCard");
  button.textContent = "X";
  button.addEventListener("click", () => onRemoveCard());

  return button;
}
