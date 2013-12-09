function buttonClick(btn) {
  chrome.tabs.executeScript(null,
      {code:"document.title='" + document.getElementById("newTitle").value + "'"});
  window.close();
}

var el = document.getElementById("changeTitle");
if (el.addEventListener)
    el.addEventListener("click", doFunction, false);
else if (el.attachEvent)
    el.attachEvent('onclick', doFunction);