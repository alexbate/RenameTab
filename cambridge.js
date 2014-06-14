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
					var newTitle=finalParse[0];
				}
			} else if (splitSlash[5]=='solutions') {
				var finalParse = splitSlash[7].split(".");
				var newTitle = "Solution - y" + splitSlash[6] + finalParse[0]
			}
		} else {
			var newTitle = splitSlash[5] + ' - ' + finalParse[0];
		}
	}
} else if (splitDomain[1]=="maths" && splitSlash[4]=="pastpapers") {
	var newTitle = splitSlash[5] + " " + finalParse[0];
}

if (newTitle!="") {
	document.title=newTitle;
}

