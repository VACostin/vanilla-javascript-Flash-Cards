export default function buttonSelectDeckTheme(onSelectTheme) {
  const button = document.querySelector("#buttonSelectDeckTheme");
  button.addEventListener("click", () => onSelectTheme());
  return button;
}
