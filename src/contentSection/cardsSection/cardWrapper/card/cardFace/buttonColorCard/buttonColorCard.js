const COLOR_LIST = [
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "LightBlue",
  "Indigo",
  "Violet",
];

export default function buttonColorCard(
  parent,
  onShowColors,
  onHideColors,
  onChangeColor
) {
  const button = document.createElement("button");
  let colorsShown = false;
  const colorObjects = [];
  button.classList.add("buttonColorCard");
  button.addEventListener("mousedown", () => toggleColors());
  init();

  function init() {
    COLOR_LIST.forEach((color) => {
      const div = document.createElement("div");
      div.classList.add("colorCircle");
      div.style.backgroundColor = color;
      div.addEventListener("animationend", () => onAnimationEnd(div));
      div.addEventListener("click", () => changeCardColor(color));
      parent.appendChild(div);
      colorObjects[color] = div;
    });
  }

  function toggleColors() {
    if (colorsShown) hideColors();
    else showColors();
    colorsShown = !colorsShown;
  }

  function showColors() {
    onShowColors();
    COLOR_LIST.forEach((color) => {
      const div = colorObjects[color];
      div.style.pointerEvents = "auto";
      div.style.display = "block";
      div.remove();
      div.style.animationName = "colorMove" + color;
      div.style.animationDirection = "normal";
      div.style.animationFillMode = "forwards";
      parent.appendChild(div);
    });
  }

  function hideColors() {
    onHideColors();
    COLOR_LIST.forEach((color) => {
      const div = colorObjects[color];
      div.style.pointerEvents = "none";
      div.remove();
      div.style.animationName = "colorMove" + color;
      div.style.animationDirection = "reverse";
      parent.appendChild(div);
    });
  }

  function onAnimationEnd(div) {
    if (!colorsShown) div.style.display = "none";
  }

  function changeCardColor(color) {
    onChangeColor(color);
  }

  return button;
}
