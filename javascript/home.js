var totImgs = 7;
var curImg = 1;
var images = [];

function HomeOnLoad() {
	Carousel();
	//RemoveOverlay();
}

function Carousel() {
	PreloadImages();
	setInterval(function() {
		var main = document.getElementsByTagName('main')[0];
		var pointer = "url(\'" + images[curImg].src + "\')";
		main.style.backgroundImage = pointer;
		curImg = (curImg + 1) % totImgs;
	}, 5000);
}

function PreloadImages() {
    for (var i = 0; i < 10; i++) {
    	images[i] = new Image();
    	images[i].src = "../assets/back" + i +  ".jpg";
    }

    for (var i = 0; i < images.length; i++) {
    	console.log(images[i]);
    }
}

function FocusCounter(index) {
	var all = document.getElementsByClassName("small-counter");
	var present = document.getElementsByClassName("small-counter-focused")[0];

	if(present == all[index]) {
		// E' già selezionato, stai buono
		return;
	}

	present.classList.remove("small-counter-focused");
	all[index].classList.add("small-counter-focused");

	UpdateBigCounter(index);
}

function UpdateBigCounter(index) {
	counter = document.getElementsByClassName("focused-counter")[0];
	counterSmallText = counter.getElementsByClassName("counter-text-small")[0];
	counterBigText = counter.getElementsByClassName("counter-text-big")[0];

	switch(index) {
		case 1: 	// Credito
			counterSmallText.innerHTML = "Hai ancora";
			counterBigText.innerHTML = "12.53€";
			break;
		case 2: 	// Minuti
			counterSmallText.innerHTML = "Hai ancora";
			counterBigText.innerHTML = "312 minuti";
			break;
		case 3: 	// SMS
			counterSmallText.innerHTML = "Hai ancora";
			counterBigText.innerHTML = "53 SMS";
			break;
		case 4: 	// Giga
			counterSmallText.innerHTML = "Hai ancora";
			counterBigText.innerHTML = "7.12GB";
			break;
	}
}

function OpenCounterOverlay() {
	var focused = document.getElementsByClassName("small-counter-focused")[0].getElementsByClassName("counter-content")[0].getElementsByTagName("p")[0].innerHTML;
	var overlay = document.getElementsByClassName("counter-overlay-closed")[0];
	console.log(focused);
	switch(focused) {
		case "Credito":
			break;
		case "Minuti":
			break;
		case "SMS":
			break;
		case "Giga":
			break;	
	}

	overlay.classList.add("counter-overlay-open");
}

function CloseCounterOverlay() {
	var overlay = document.getElementsByClassName("counter-overlay-closed")[0];
	overlay.classList.remove("counter-overlay-open");
}