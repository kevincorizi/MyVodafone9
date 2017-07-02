var isGoToHelp = false;

function LoadingOnLoad() {
	SetLandingTimer();
}

function SetLandingTimer() {
	setTimeout(function() {
		if(isGoToHelp == true) {
			window.location.href = "./help.html";
		}
		else {
			window.location.href = "./home.html";
		}
	}, 5000);
}

function SetGoToHelp() {
	isGoToHelp = true;
}

