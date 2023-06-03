export default function buttonRemoveCard(name, callbackFunction) {
  const button = document.createElement('button');

  button.classList.add('buttonRemove');
  button.setAttribute('id', 'buttonRemoveCard_' + name);
  button.addEventListener('click', () => callbackFunction(name));

  return button;
}