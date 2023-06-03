export default function buttonOpenDeck(name, callbackFunction) {
  const button = document.createElement('button');
  button.classList.add('buttonDeck');
  button.setAttribute('id', 'buttonDeck_' + name);
  button.textContent = name;
  button.addEventListener('click', () => callbackFunction(name));

  return button;
}