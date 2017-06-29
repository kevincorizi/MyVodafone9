function ExpandHelp(e) {
	e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || text.innerText; 

    while ((target = target.parentElement) && !target.classList.contains("help-faq"));
	
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