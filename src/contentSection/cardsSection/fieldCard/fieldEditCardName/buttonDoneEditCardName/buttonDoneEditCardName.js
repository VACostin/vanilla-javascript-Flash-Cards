const buttonDoneEditCardName = (() => {
  const button = document.createElement('button');
  button.setAttribute('id', 'buttonDoneEditCardName');
  button.textContent = 'Done';
  const init = (callbackFunction) => {
    button.addEventListener('click', () => callbackFunction());
  };

  const show = (fieldDeckName) => {
    fieldDeckName.appendChild(button);
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

export default buttonDoneEditCardName;