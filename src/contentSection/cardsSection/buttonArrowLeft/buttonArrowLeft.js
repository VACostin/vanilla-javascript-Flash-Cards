export default function buttonArrowLeft(onScrollLeft) {
  const button = document.querySelector("#leftArrow");
  button.addEventListener("click", () => onScrollLeft());
  return button;
}
