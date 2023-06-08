import headerSection from "./headerSection/headerSection";
import contentSection from "./contentSection/contentSection";
import footerSection from "./footerSection/footerSection";
import "./style.css";
import "./reset.css";

function initUI() {
  localStorage.clear();
  let editableFlag = true;
  const header = headerSection();
  const content = contentSection(contentCallBacks());
  const footer = footerSection(footerCallbacks());
  header.setCallBacks(headerCallbacks());
  footer.hide();

  function headerCallbacks() {
    const functionStack = new Object();
    functionStack.loadFlashCards = content.loadFlashCards;
    functionStack.hideContent = content.hide;
    functionStack.toggleAllExcept = toggleAllExcept;
    functionStack.footer = footer;
    return functionStack;
  }

  function contentCallBacks() {
    const functionStack = new Object();
    functionStack.changeDeckName = header.changeDeckName;
    return functionStack;
  }

  function footerCallbacks() {
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
