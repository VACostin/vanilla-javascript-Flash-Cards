const buttonCancelEditCardName = (() => {
  const button = document.createElement('button');
  button.setAttribute('id', 'buttonCancelEditCardName');
  button.textContent = 'Cancel';
  const init = (callbackFunction) => {
    button.addEventListener('click', () => callbackFunction());
  };

  const show = (card) => {
    card.appendChild(button);
  }

  const hide = () => {
    button.remove();
  }
  

  return {
    init,
    show,
    hide
  };
})();

export default buttonCancelEditCardName;