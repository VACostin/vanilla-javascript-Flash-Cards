const fieldDeckName = (() => {
  const field = document.querySelector('#fieldDeckName');

  const init = (callbackFunction) => {
    field.addEventListener('click', () => callbackFunction());
  };

  const getDeckName = () => {
    return field.textContent;
  }

  const setDeckName = (deckName) => {
    field.textContent = deckName;
  }

  return {
    init,
    getDeckName,
    setDeckName,
  };
})();

export default fieldDeckName;