export default function buttonRemoveCard(callbackFunction) {
  const button = document.createElement('button');

  button.classList.add('buttonRemove');
  button.textContent = 'X';
  button.addEventListener('click', () => callbackFunction());

  return button;
}