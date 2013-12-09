function buttonClick() {
  chrome.tabs.executeScript(null,
      {code:"document.title='" + document.getElementById("newTitle").value + "'"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
      document.querySelector('button').addEventListener('click', buttonClick);      
});