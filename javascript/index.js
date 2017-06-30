function SlideDemo() {
	setTimeout(function (){
		document.getElementById("demo-intro-text").style.maxWidth = "50vh";
	}, 1000);
}

function ShowDemo() {
	document.getElementsByTagName("iframe")[0].src = "./html/loading.html";
	setTimeout(function () {
		document.getElementById("demo-intro").style.display = "none";
	}, 1000);
	document.getElementById("demo-intro").style.top = "-100vh";
	document.getElementById("demo-intro").style.bottom = "100vh";
}