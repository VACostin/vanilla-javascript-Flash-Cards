export default function deckNameQuerries() {
  function insertNewDeckObject(deckName) {
    const deckObject = {};
    localStorage.setItem(deckName, JSON.stringify(deckObject));
  }

  function getDeckObject(deckName) {
    const deckObject = JSON.parse(localStorage.getItem(deckName));
    return deckObject;
  }

  function getAllDeckNames() {
    const nameList = [];
    Object.keys(localStorage).forEach((key) => nameList.push(key));
    return nameList;
  }

  function updateDeckObject(deckNameOld, deckName) {
    const deckObject = getDeckObject(deckNameOld);
    removeDeckObject(deckNameOld);
    insertDeckObject(deckName, deckObject);
  }

  function removeDeckObject(deckName) {
    localStorage.removeItem(deckName);
  }

  return {
    insertNewDeckObject,
    getDeckObject,
    getAllDeckNames,
    updateDeckObject,
    removeDeckObject,
  };
}
