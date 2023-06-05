export default function buttonEditCard(editCard) {
  const button = document.createElement('button');

  button.classList.add('buttonEditCard');
  button.textContent = 'V';
  button.addEventListener('click', () => editCard());

  return button;
}