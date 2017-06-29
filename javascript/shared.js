function OpenSidebar() {
	var body = document.getElementsByTagName("body")[0];

	if(body.style.marginLeft == "0%" || body.style.marginLeft == "")
		body.style.marginLeft = "-75%";
	else 
		body.style.marginLeft = "0%";
}

function GoToHelp() {
	window.location.href = "../html/help.html";
}
