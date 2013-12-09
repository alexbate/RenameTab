function buttonClick() {
  chrome.tabs.executeScript(null,
      {code:"document.title='" + document.getElementById("newTitle").value + "'"});
  window.close();
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
