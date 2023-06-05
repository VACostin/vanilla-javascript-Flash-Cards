export default function buttonDoneEditCardName(callbackFunction) {
  const button = document.createElement("button");
  button.classList.add("buttonDoneEditCardName");
  button.textContent = "Done";
  button.addEventListener("click", () => callbackFunction());

  return button;
}
