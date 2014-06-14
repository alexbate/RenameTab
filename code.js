var currentTabID = 0;
function buttonClick() {
  chrome.tabs.executeScript(null,
      {code:"document.title='" + document.getElementById("newTitle").value + "'"});
  window.close();
}

function doInCurrentTab(tabCallback) { //http://stackoverflow.com/questions/7303452/how-to-get-current-tabid-from-background-page
    chrome.tabs.query(
        { currentWindow: true, active: true },
        function (tabArray) { tabCallback(tabArray[0]); }
    );
}

function handleKeyPress(e){
 var key=e.keyCode || e.which;
  if (key==13){
     buttonClick();
  }
}

document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('changeTitle').addEventListener('click', buttonClick);
      document.getElementById('createLock').addEventListener('click', createLock);
	   document.getElementById('newTitle').addEventListener('keypress', handleKeyPress);
});

function createLock() {
  doInCurrentTab(function(tab){currentTabID = tab.id;
  chrome.extension.sendMessage(
    {to:"background", relTabID:currentTabID, title:document.getElementById("newTitle").value});}
  );
}

function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}