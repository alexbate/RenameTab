var url = location.href;
var splitURL = url.split("/");
var finalParse = splitURL[7].split(".");

var newTitle = splitURL[6] + " " + finalParse[0];;
document.title= newTitle;