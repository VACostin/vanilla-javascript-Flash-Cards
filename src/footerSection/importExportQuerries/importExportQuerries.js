const RESERVED_NAME = "_deckThemes";

export default function importExportQuerries() {
  function exportDecksJSON() {
    const localStorageCopy = JSON.parse(JSON.stringify(localStorage));
    delete localStorageCopy[RESERVED_NAME];
    return JSON.stringify(localStorageCopy);
  }

  function importDecksJSON(stringJSON) {
    const decks = JSON.parse(stringJSON);
    delete decks[RESERVED_NAME];
    Object.keys(decks).forEach((deckName) => {
      let deckObject = getDeckObject(deckName);
      if (deckObject === null)
        insertDeckObject(deckName, JSON.parse(decks[deckName]));
      else {
        let cards = JSON.parse(decks[deckName]);
        Object.keys(cards).forEach(
          (cardName) => (deckObject[cardName] = cards[cardName])
        );
        insertDeckObject(deckName, deckObject);
      }
    });
  }

  function insertDeckObject(deckName, deckObject) {
    localStorage.setItem(deckName, JSON.stringify(deckObject));
  }

  function getDeckObject(deckName) {
    return JSON.parse(localStorage.getItem(deckName));
  }

  return {
    exportDecksJSON,
    importDecksJSON,
  };
}
