export default function buttonEditCard(disableFlip, editCard) {
  const button = document.createElement("button");

  button.classList.add("buttonEditCard");
  button.textContent = "E";
  button.addEventListener("mousedown", () => disableFlip());
  button.addEventListener("click", () => editCard());

  return button;
}
