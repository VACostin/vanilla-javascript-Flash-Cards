export default function buttonImport(onImport) {
  const button = document.querySelector("#buttonImport");
  button.addEventListener("click", () => onImport());
  return button;
}
