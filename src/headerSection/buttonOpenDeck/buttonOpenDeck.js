export default function buttonOpenDeck(name, callbackFunction) {

  const button = document.createElement('button');
  button.classList.add('buttonDeck');
  button.setAttribute('id', 'buttonDeck_' + name);
  button.textContent = name;

  button.addEventListener('click', () => {
    const buttonID = button.getAttribute('id');
    const deckName = buttonID.substring(11);
    callbackFunction(deckName);
  });

  return button;
}