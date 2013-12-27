var url = location.href;
var splitURL = url.split("/");

if (splitURL[5]=='pastpapers') {

	var finalParse = splitURL[6].split(".");

	if (finalParse[1]=='pdf') {
		document.title=finalParse[0];
	}
	
} else if (splitURL[5]=='solutions') {
	
	var finalParse = splitURL[7].split(".");
	
	var newTitle = "Solution - y" + splitURL[6] + finalParse[0];
	document.title=newTitle;
}