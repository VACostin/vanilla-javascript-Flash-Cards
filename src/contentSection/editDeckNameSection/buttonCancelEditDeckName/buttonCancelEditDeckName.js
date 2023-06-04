const buttonCancelEditDeckName = (() => {
  const button = document.createElement('button');
  button.setAttribute('id', 'buttonCancelEditDeckName');
  button.textContent = 'Cancel';
  const init = (callbackFunction) => {
    button.addEventListener('click', () => callbackFunction());
  };

  const show = (fieldEditDeckName) => {
    fieldEditDeckName.appendChild(button);
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

export default buttonCancelEditDeckName;