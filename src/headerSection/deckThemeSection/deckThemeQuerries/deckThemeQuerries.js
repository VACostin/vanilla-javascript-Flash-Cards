const THEMESARRAY = [
  "navyWalrus",
  "zen_e",
  "ex_wife",
  "autumnVegan",
  "perfectlyImmersiveMellodyPlaylist",
];

export default function deckThemeQuerries() {
  initThemes();

  function initThemes() {
    if (localStorage.getItem("_deckThemes") === null) {
      const deckThemes = {
        themes: THEMESARRAY,
        index: 0,
      };
      localStorage.setItem("_deckThemes", JSON.stringify(deckThemes));
    }
  }

  function getAllThemeNames() {
    const deckThemes = JSON.parse(localStorage.getItem("_deckThemes"));
    const themesArray = deckThemes["themes"];
    return themesArray;
  }

  function getTheme() {
    const deckThemes = JSON.parse(localStorage.getItem("_deckThemes"));
    const themesArray = deckThemes["themes"];
    const index = deckThemes["index"];
    return themesArray[index];
  }

  function getNextTheme() {
    const deckThemes = JSON.parse(localStorage.getItem("_deckThemes"));
    const themesArray = deckThemes["themes"];
    let index = deckThemes["index"];
    index++;
    if (index == themesArray.length) index = 0;
    deckThemes["index"] = index;
    localStorage.setItem("_deckThemes", JSON.stringify(deckThemes));
    return themesArray[index];
  }

  return {
    getAllThemeNames,
    getTheme,
    getNextTheme,
  };
}
