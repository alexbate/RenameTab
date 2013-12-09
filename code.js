function buttonClick() {
  chrome.tabs.executeScript(null,
      {code:"document.title='" + document.getElementById("newTitle").value + "'"});
  window.close();
}
