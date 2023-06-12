export default function buttonArrowRight(onScrollRight) {
  const button = document.querySelector("#rightArrow");
  button.addEventListener("click", () => onScrollRight());
  return button;
}
