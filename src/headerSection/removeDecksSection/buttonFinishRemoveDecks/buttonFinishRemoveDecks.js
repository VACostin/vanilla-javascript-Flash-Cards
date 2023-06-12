export default function buttonFinishRemoveDecks(onFinishRemoveDecks) {
  const button = document.createElement("button");
  const span = document.createElement("span");
  const img = document.createElement("img");
  button.setAttribute("id", "buttonFinishRemoveDecks");
  button.classList.add("settingsButton");
  img.classList.add("settingsIcon");
  img.setAttribute("id", "iconFinishRemoveDecks");
  span.textContent = "Done";
  button.appendChild(span);
  button.appendChild(img);
  button.addEventListener("click", () => onFinishRemoveDecks());
  return button;
}
