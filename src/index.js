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
    return header.changeDeckName;
  }

  function footerCallbacks() {
    return content.addFlashCard;
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
