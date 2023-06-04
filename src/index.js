import headerSection from './headerSection/headerSection';
import contentSection from './contentSection/contentSection';
import footerSection from './footerSection/footerSection';
import './style.css';

function UI() {

  const header = headerSection();
  const content = contentSection();
  const footer = footerSection();

  function init() {
    setCallBacks();
    render();
  }

  function setCallBacks() {
    let functionStack = getHeaderCallbacks();
    header.setCallBacks(functionStack);
    functionStack = getContentCallbacks();
    content.setCallBacks(functionStack);
    functionStack = getFooterCallBacks();
    footer.setCallBacks(functionStack);
  }

  function render() {
    header.render();
    content.render();
    footer.render();
  }

  function getHeaderCallbacks() {
    const functionStack = new Object();
    functionStack.loadFlashCards = content.loadFlashCards;
    functionStack.disableAllExcept = disableAllExcept;
    return functionStack;
  }

  function getContentCallbacks() {
    const functionStack = new Object();
    functionStack.changeDeckName = header.changeDeckName;
    functionStack.disableAllExcept = disableAllExcept;
    return functionStack;
  }

  function getFooterCallBacks() {
    const functionStack = new Object();
    functionStack.addFlashCard = content.addFlashCard;
    functionStack.disableAllExcept = disableAllExcept;
    return functionStack;
  }

  function disableAllExcept(elementId) {
    console.log('disabledAllbut ' + elementId);
  }

  return {
    init,
  }
}

const myUI = UI();
myUI.init();