export default function buttonCancelEditDeckName(callbackFunction) {
  const button = document.createElement("button");
  button.setAttribute("id", "buttonCancelEditDeckName");
  button.textContent = "Cancel";
  button.addEventListener("mousedown", () => callbackFunction());

  return button;
}
