export default function buttonEditCard(name, callbackFunction) {
  const button = document.createElement('button');

  button.classList.add('buttonRemove');
  button.setAttribute('id', 'buttonEditCard_' + name);
  button.addEventListener('click', () => callbackFunction(name));

  return button;
}