var url = location.href;
var splitURL = url.split("/");
var finalParse = splitURL[splitURL.length-1].split(".");

if (finalParse[1]=="pdf") {
	if (splitURL[4]=='exams') {
		if (splitURL[5]=='pastpapers') {

			if (finalParse[1]=='pdf') {
				console.log(finalParse[0]);
				var newTitle=finalParse[0];
			}
			
		} else if (splitURL[5]=='solutions') {
			
			var finalParse = splitURL[7].split(".");
			
			var newTitle = "Solution - y" + splitURL[6] + finalParse[0];
			
		}
	} else {
	var newTitle = splitURL[5] + ' - ' + finalParse[0];
	}
}
document.title=newTitle;