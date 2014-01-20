var url = location.href;
var splitURL = url.split("/");
var finalParse = splitURL[splitURL.length-1].split(".");

var newTitle = "";

for (var i=0; i<finalParse.length-1; i++) {
	newTitle = newTitle + finalParse[i] + " ";
}

document.title=newTitle;