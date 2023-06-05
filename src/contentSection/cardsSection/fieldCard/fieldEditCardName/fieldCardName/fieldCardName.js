export default function fieldCardName(name, onFinishEditCard) {
  const field = document.createElement('p');
  field.textContent = name;
  field.classList.add('cardName');
  field.addEventListener('focusout', () => onFinishEditCard());

  return field;
}