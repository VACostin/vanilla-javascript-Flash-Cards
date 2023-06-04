const buttonAddDeck = (() => {
  const button = document.querySelector('#buttonAddDeck');

  const init = (callbackFunction) => {
    button.addEventListener('click', () => callbackFunction());
  };

  return {
    init,
  };
})();

export default buttonAddDeck;