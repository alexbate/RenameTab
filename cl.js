
var url = location.href;
var splitURL = url.split("/");
var finalParse = splitURL[6].split(".");

document.title=finalParse[0];