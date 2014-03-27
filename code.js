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
      document.querySelector('button').addEventListener('click', buttonClick);
	  document.getElementById('newTitle').addEventListener('keypress', handleKeyPress);
});

function activateLock(setTitle) {
	var currentTabID;
	doInCurrentTab(function(tab){currentTabID=tab.id});

	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
   		if (tabId !== currentTabID) {
        	return false;
    	}

   		chrome.tabs.executeScript(null,
      {code:"document.title='" + setTitle + "'"});
	}); 
}