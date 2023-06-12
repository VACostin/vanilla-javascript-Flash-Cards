export default function fieldCardName(name, onFinishEditCard) {
  const field = document.createElement("p");
  field.textContent = name;
  field.classList.add("cardName");
  ["focusout", "touchmove"].forEach((event) => {
    field.addEventListener(event, () => onFinishEditCard());
  });
  field.addEventListener("keydown", (event) => {
    if (event.key === "Enter") field.blur();
  });

  return field;
}
