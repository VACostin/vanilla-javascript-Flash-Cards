const buttonRemoveDeck = (() => {
  const button = document.querySelector('#buttonRemoveDeck');

  const init = (callbackFunction) => {
    button.addEventListener('click', () => callbackFunction());
  };

  return {
    init,
  };
})();

export default buttonRemoveDeck;