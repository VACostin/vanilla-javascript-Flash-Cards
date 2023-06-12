const DEFAULT_NAME = "New Deck";
const RESERVED_NAME = "_deckThemes";

export default function deckNameQuerries() {
  function insertNewDeckObject() {
    const deckName = generateName(DEFAULT_NAME);
    const deckObject = {};
    localStorage.setItem(deckName, JSON.stringify(deckObject));
    return deckName;
  }

  function insertDeckObject(deckName, deckObject) {
    localStorage.setItem(deckName, JSON.stringify(deckObject));
  }

  function getDeckObject(deckName) {
    const deckObject = JSON.parse(localStorage.getItem(deckName));
    return deckObject;
  }

  function getAllDeckNames() {
    const nameList = [];
    Object.keys(localStorage).forEach((key) => {
      if (key != RESERVED_NAME) nameList.push(key);
    });
    return nameList;
  }

  function updateDeckObject(deckNameOld, deckName) {
    const deckObject = getDeckObject(deckNameOld);
    const deckNameNew = generateName(deckName);
    removeDeckObject(deckNameOld);
    insertDeckObject(deckNameNew, deckObject);
    return deckNameNew;
  }

  function generateName(deckName) {
    const nameList = getAllDeckNames();
    nameList.push(RESERVED_NAME);
    const defaultName = deckName;
    for (let i = 1; nameList.includes(deckName); i++) {
      deckName = defaultName + i;
    }
    return deckName;
  }

  function removeDeckObject(deckName) {
    localStorage.removeItem(deckName);
  }

  return {
    insertNewDeckObject,
    getAllDeckNames,
    updateDeckObject,
    removeDeckObject,
  };
}
