export default function buttonEditCard(onDisableFlip, onEditCard) {
  const button = document.createElement("button");

  button.classList.add("buttonEditCard");
  button.addEventListener("mousedown", () => onDisableFlip());
  button.addEventListener("click", () => onEditCard());

  return button;
}
