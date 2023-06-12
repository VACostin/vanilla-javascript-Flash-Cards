import buttonAddFlashCard from "./buttonAddFlashCard/buttonAddFlashCard.js";
import buttonImport from "./buttonImport/buttonImport.js";
import buttonExport from "./buttonExport/buttonExport.js";
import importExportQuerries from "./importExportQuerries/importExportQuerries.js";

export default function footerSection(onAddFlashCard) {
  const footer = document.querySelector("#footer");
  const db = importExportQuerries();
  const buttonAdd = buttonAddFlashCard(onAddFlashCard);
  const buttonImportDecks = buttonImport(importDecks);
  const buttonExportDecks = buttonExport(exportDecks);

  function importDecks() {
    const stringJSON = prompt("Paste your string input here:");
    if (stringJSON != null) {
      try {
        JSON.parse(stringJSON);
      } catch (e) {
        alert("Invalid JSON string!");
        return false;
      }
    } else return false;
    db.importDecksJSON(stringJSON);
    confirm("Cards successfully imported!");
    location.reload();
  }

  async function exportDecks() {
    const stringJSON = db.exportDecksJSON();
    const element = document.createElement("textarea");
    element.value = stringJSON;
    element.readOnly = "readOnly";
    document.body.appendChild(element);
    element.select();
    document.execCommand("copy");
    document.body.removeChild(element);
    alert("📋 Coppied to clipboard!");
  }

  function show() {
    buttonAdd.style.visibility = "visible";
  }

  function showAll() {
    buttonAdd.style.visibility = "visible";
    buttonImportDecks.style.visibility = "visible";
    buttonExportDecks.style.visibility = "visible";
  }

  function hide() {
    buttonAdd.style.visibility = "hidden";
  }

  function hideAll() {
    buttonAdd.style.visibility = "hidden";
    buttonImportDecks.style.visibility = "hidden";
    buttonExportDecks.style.visibility = "hidden";
  }

  function enableAll() {
    showAll();
    footer.style.pointerEvents = "auto";
  }

  function disableAll() {
    hideAll();
    footer.style.pointerEvents = "none";
  }

  return {
    show,
    hide,
    enableAll,
    disableAll,
  };
}
