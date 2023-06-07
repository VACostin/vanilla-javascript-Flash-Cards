import headerSection from "./headerSection/headerSection";
import contentSection from "./contentSection/contentSection";
import footerSection from "./footerSection/footerSection";
import "./style.css";
import "./reset.css";

function initUI() {
  localStorage.clear();
  let editableFlag = true;
  const header = headerSection();
  let functionStack = getContentCallbacks();
  const content = contentSection(functionStack);
  functionStack = getFooterCallBacks();
  const footer = footerSection(functionStack);
  functionStack = getHeaderCallbacks();
  header.setCallBacks(functionStack);
  footer.hide();

  function getHeaderCallbacks() {
    const functionStack = new Object();
    functionStack.loadFlashCards = content.loadFlashCards;
    functionStack.hideContent = content.hide;
    functionStack.toggleAllExcept = toggleAllExcept;
    functionStack.footer = footer;
    return functionStack;
  }

  function getContentCallbacks() {
    const functionStack = new Object();
    functionStack.changeDeckName = header.changeDeckName;
    return functionStack;
  }

  function getFooterCallBacks() {
    const functionStack = new Object();
    functionStack.addFlashCard = content.addFlashCard;
    return functionStack;
  }

  function toggleAllExcept(section) {
    const sections = {
      header: [content, footer],
      content: [header, footer],
      footer: [header, content],
    };

    const elementsToToggle = sections[section];
    if (editableFlag)
      elementsToToggle.forEach((element) => element.disableAll());
    else elementsToToggle.forEach((element) => element.enableAll());
    editableFlag = !editableFlag;
  }
}

initUI();
