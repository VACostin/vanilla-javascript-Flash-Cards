import headerSection from './modules/headerSection';
import contentSection from './modules/contentSection';
import footerSection from './modules/footerSection';

function UI() {

  const header = headerSection();
  const content = contentSection();
  const footer = footerSection();

  function init() {
    let functionStack = getHeaderCallbacks();
    header.setCallBacks(functionStack);
    functionStack = getContentCallbacks();
    content.setCallBacks(functionStack);
    functionStack = getFooterCallBacks();
    content.setCallBacks(functionStack);
  }

  function getHeaderCallbacks() {
    const functionStack = new Object();
    functionStack.loadFlashCards = content.loadFlashCards;
    functionStack.disableAllExcept = disableAllExcept;
    return functionStack;
  }

  function getContentCallbacks() {
    const functionStack = new Object();
    functionStack.editDeckName = header.editDeckName;
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