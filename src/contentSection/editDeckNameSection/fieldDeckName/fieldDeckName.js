const fieldDeckName = (() => {
  const field = document.createElement('p');
  field.setAttribute('id', 'fieldDeckName');

  const init = (callbackFunction) => {
    field.addEventListener('click', () => callbackFunction());
  };

  const show = (parent) => {
    field.contentEditable = true;
    parent.appendChild(field);
  }

  const hide = () => {
    field.remove();
  }

  const getDeckName = () => {
    return field.textContent;
  }

  const setDeckName = (deckName) => {
    field.textContent = deckName;
  }

  return {
    init,
    show,
    hide,
    getDeckName,
    setDeckName,
  };
})();

export default fieldDeckName;