const DEFAULT_VALUES = {
  description: "Description",
  textColor: "rgb(0, 0, 0)",
  backgroundColor: "rgb(255, 255, 255)",
  //title: "Card Title"
};

const DEFAULT_TITLE = "Card Title";

export default function cardQuerries() {
  function insertCardObject(deckName) {
    const deckObject = JSON.parse(localStorage.getItem(deckName));
    const cardName = generateName(deckName, DEFAULT_TITLE);
    DEFAULT_VALUES.title = cardName;
    deckObject[cardName] = DEFAULT_VALUES;
    localStorage.setItem(deckName, JSON.stringify(deckObject));
    return JSON.parse(JSON.stringify(deckObject[cardName]));
  }

  function getAllCardObjects(deckName) {
    const cardList = [];
    const deckObject = JSON.parse(localStorage.getItem(deckName));
    Object.keys(deckObject).forEach((cardName) => {
      const card = deckObject[cardName];
      cardList.push(card);
    });
    return cardList;
  }

  function generateName(deckName, cardName) {
    const defaultName = cardName;
    const nameList = getAllCardNames(deckName);
    for (let i = 1; nameList.includes(cardName); i++)
      cardName = defaultName + i;
    return cardName;
  }

  function getAllCardNames(deckName) {
    const nameList = [];
    const deckObject = JSON.parse(localStorage.getItem(deckName));
    Object.keys(deckObject).forEach((cardName) => nameList.push(cardName));
    return nameList;
  }

  function updateCardObjectProperty(deckName, cardObject) {
    const cardName = cardObject.title;
    const deckObject = JSON.parse(localStorage.getItem(deckName));
    deckObject[cardName] = cardObject;
    localStorage.setItem(deckName, JSON.stringify(deckObject));
  }

  function updateCardObjectName(deckName, cardObject) {
    const cardNameOld = cardObject.title;
    const defaultCardName = cardObject.titleNew;
    delete cardObject.titleNew;
    deleteCardObject(deckName, cardNameOld);
    const cardNameNew = generateName(deckName, defaultCardName);
    cardObject.title = cardNameNew;
    const deckObject = JSON.parse(localStorage.getItem(deckName));
    deckObject[cardNameNew] = cardObject;
    localStorage.setItem(deckName, JSON.stringify(deckObject));
    return cardNameNew;
  }

  function deleteCardObject(deckName, cardName) {
    const deckObject = JSON.parse(localStorage.getItem(deckName));
    delete deckObject[cardName];
    localStorage.setItem(deckName, JSON.stringify(deckObject));
  }

  return {
    insertCardObject,
    getAllCardObjects,
    updateCardObjectProperty,
    updateCardObjectName,
    deleteCardObject,
  };
}
