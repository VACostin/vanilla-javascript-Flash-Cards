export default function buttonEditCard(onDisableFlip, onEditCard) {
  const button = document.createElement("button");

  button.classList.add("buttonEditCard");
  button.textContent = "E";
  button.addEventListener("mousedown", () => onDisableFlip());
  button.addEventListener("click", () => onEditCard());

  return button;
}
