function clock() {
	var d = new Date(),
		hours = d.getHours(),
		minutes = d.getMinutes(),
		seconds = d.getSeconds(),
		hourContainer = document.getElementById("hour"),
		minuteContainer = document.getElementById("minute"),
		secondContainer = document.getElementById("second");
  
	if (hours < 10) {
		hours = "0" + hours;
	}
	
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	
	hourContainer.innerHTML = hours;
	minuteContainer.innerHTML = minutes;
	secondContainer.innerHTML = seconds;
}

setInterval(clock, 1000);