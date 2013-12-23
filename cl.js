var url = location.href;
var splitURL = url.split("/");
var finalParse = splitURL[6].split(".");
if (finalParse[1]=='pdf') {
	document.title=finalParse[0];
}