var url = location.href;
var splitURL = url.split("/");
var finalParse = splitURL[splitURL.length-1].split(".");

document.title=finalParse[0];