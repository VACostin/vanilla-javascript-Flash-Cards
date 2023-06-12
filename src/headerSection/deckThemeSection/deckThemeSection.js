import buttonSelectDeckTheme from "./buttonSelectDeckTheme/buttonSelectDeckTheme.js";
import deckThemeQuerries from "./deckThemeQuerries/deckThemeQuerries.js";

export default function deckThemeSection() {
  const deckThemeSection = document.querySelector("#deckTheme");
  const button = buttonSelectDeckTheme(selectTheme);
  const db = deckThemeQuerries();
  const themeNodeList = new Object();
  init();

  async function init() {
    const themeList = db.getAllThemeNames();
    for (const themeName of themeList) {
      await import(`./themes/${themeName}.css`);
      const themeNode = getThemeNode();
      themeNodeList[themeName] = themeNode;
    }
    const themeName = db.getTheme();
    loadTheme(themeName);
  }

  function selectTheme() {
    const themeNameOld = db.getTheme();
    const themeName = db.getNextTheme();
    removeTheme(themeNameOld);
    loadTheme(themeName);
  }

  function getThemeNode() {
    const themeStyle = document.head.querySelector("style:not(.styleMain)");
    themeStyle.remove();
    return themeStyle;
  }

  function loadTheme(themeName) {
    document.head.appendChild(themeNodeList[themeName]);
  }

  function removeTheme(themeName) {
    themeNodeList[themeName].remove();
  }

  function enable() {
    deckThemeSection.appendChild(button);
    button.disabled = false;
  }

  function disable() {
    button.remove();
    button.disabled = true;
  }

  return {
    enable,
    disable,
  };
}
