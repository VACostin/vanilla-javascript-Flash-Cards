export default function buttonOpenDeck(name, functionStack) {

  const loadFlashCards = functionStack.loadFlashCards;
  const showFooter = functionStack.showFooter;
  const button = document.createElement('button');
  button.classList.add('deck');
  button.setAttribute('id', 'buttonDeck_' + name);
  button.textContent = name;

  button.addEventListener('click', () => {
    const buttonID = button.getAttribute('id');
    const deckName = buttonID.substring(11);
    loadFlashCards(deckName);
    showFooter();
  });

  return button;
}