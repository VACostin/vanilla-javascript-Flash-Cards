export default function buttonCancelEditCardName(callbackFunction) {
  const button = document.createElement("button");
  button.classList.add("buttonCancelEditCardName");
  button.textContent = "Cancel";
  button.addEventListener("click", () => callbackFunction());

  return button;
}
