function ExpandHelp(e) {
	e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText; 

    while ((target = target.parentElement) && !target.classList.contains("help-faq"));

    // Close other tabs
    var other = document.getElementsByClassName("help-faq-open")[0];
    if(other) {
    	other.classList.remove("help-faq-open");
    	other.classList.add("help-faq-closed");
    	other.getElementsByTagName("i")[0].style.transform = "rotate(0deg)";
    }

	if(target.classList.contains("help-faq-closed")) {
		target.classList.remove("help-faq-closed");
		target.classList.add("help-faq-open");
		target.getElementsByTagName("i")[0].style.transform = "rotate(-180deg)";
	} else {
		target.classList.add("help-faq-closed");
		target.classList.remove("help-faq-open");
		target.getElementsByTagName("i")[0].style.transform = "rotate(0deg)";
	}
}

function VoteAnswerYes() {
	var voteoverlay = document.getElementById("vote-answer-overlay");
	var yespopup = document.getElementsByClassName("vote-answer-result")[0];
	voteoverlay.style.top = "0";
	yespopup.style.bottom = "0";
}

function VoteAnswerNo() {
	var voteoverlay = document.getElementById("vote-answer-overlay");
	var nopopup = document.getElementsByClassName("vote-answer-result")[1];
	voteoverlay.style.top = "0";
	nopopup.style.bottom = "0";
}

function CloseAnswerYes() {
	var yespopup = document.getElementsByClassName("vote-answer-result")[0];
	yespopup.style.bottom = "-100%";
	setTimeout(function() {
		var voteoverlay = document.getElementById("vote-answer-overlay");
		voteoverlay.style.top = "100%";
	}, 300);	
}

function CloseAnswerNo() {
	var nopopup = document.getElementsByClassName("vote-answer-result")[1];
	nopopup.style.bottom = "-100%";
	setTimeout(function() {
		var voteoverlay = document.getElementById("vote-answer-overlay");
		voteoverlay.style.top = "100%";
	}, 300);
}