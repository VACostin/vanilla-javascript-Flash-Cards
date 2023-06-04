export default function buttonEditCard(callbackFunction) {
  const button = document.createElement('button');

  button.classList.add('buttonEditCard');
  button.textContent = 'V';
  button.addEventListener('click', () => callbackFunction());

  return button;
}