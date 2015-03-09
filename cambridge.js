var url = location.href;
var splitSlash = url.split("/");
var splitDomain = splitSlash[2].split(".");
var finalParse = splitSlash[splitSlash.length-1].split(".");
var newTitle = "";

if (splitDomain[0]=="camtools") { //Camtools
	for (var i=0; i<finalParse.length-1; i++) {
		newTitle = newTitle + finalParse[i] + " ";
	}
} else if (splitDomain[1]=="cl") {
	if (finalParse[1]=="pdf") {
		if (splitSlash[4]=='exams') {
			if (splitSlash[5]=='pastpapers') {
				if (finalParse[1]=='pdf') {
					newTitle=finalParse[0];
				}
			} else if (splitSlash[5]=='solutions') {
				var finalParse = splitSlash[7].split(".");
				newTitle = "Solution - y" + splitSlash[6] + finalParse[0]
			}
		} else {
			newTitle = splitSlash[5] + ' - ' + finalParse[0];
		}
	}
} else if (splitDomain[1]=="maths" && splitSlash[4]=="pastpapers") {
	newTitle = splitSlash[5] + " " + finalParse[0];
}

if (newTitle!="") {
	var head = document.createElement('head');
	var title = document.createElement('title');
	var text = document.createTextNode(newTitle);
	title.appendChild(text);
	head.appendChild(title);
	document.body.appendChild(head);
}
