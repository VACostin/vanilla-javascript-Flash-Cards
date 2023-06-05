export default function buttonDoneEditDeckName(callbackFunction) {
  const button = document.createElement("button");
  button.setAttribute("id", "buttonDoneEditDeckName");
  button.textContent = "Done";
  button.addEventListener("click", () => callbackFunction());

  return button;
}
