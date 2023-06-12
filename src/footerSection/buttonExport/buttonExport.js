export default function buttonExport(onExport) {
  const button = document.querySelector("#buttonExport");
  button.addEventListener("click", () => onExport());
  return button;
}
