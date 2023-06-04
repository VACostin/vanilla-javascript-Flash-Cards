export default function fieldCardName(name, callbackFunction1, callbackFunction2) {
  const field = document.createElement('p');
  field.textContent = name;
  field.classList.add('cardName');
  field.addEventListener('blur', () => callbackFunction1());
  field.addEventListener('click', () =>callbackFunction2());

  return field;
}