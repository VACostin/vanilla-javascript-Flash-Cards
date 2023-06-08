import buttonAddFlashCard from "./buttonAddFlashCard/buttonAddFlashCard.js";

export default function footerSection(onAddFlashCard) {
  const footer = document.querySelector("#footer");
  const buttonAdd = buttonAddFlashCard(onAddFlashCard);

  function show() {
    footer.appendChild(buttonAdd);
  }

  function hide() {
    buttonAdd.remove();
  }

  function enableAll() {
    show();
    footer.style.pointerEvents = "auto";
    footer.style.backgroundColor = "white";
  }

  function disableAll() {
    hide();
    footer.style.pointerEvents = "none";
    footer.style.backgroundColor = "black";
  }

  return {
    show,
    hide,
    enableAll,
    disableAll,
  };
}
