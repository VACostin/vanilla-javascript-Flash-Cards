const buttonAddFlashCard = (() => {
  const button = document.querySelector('#buttonAddFlashCard');

  const init = (callbackFunction) => {
    button.addEventListener('click', () => callbackFunction());
  };

  return {
    init,
  };
})();

export default buttonAddFlashCard;