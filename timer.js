var days_text = document.getElementById("days");
var hours_text = document.getElementById("hours");
var minutes_text = document.getElementById("minutes");
var seconds_text = document.getElementById("seconds");

var initial_date = new Date("July 25, 2016, 12:00:00").getTime();

var x = setInterval(function() {
	var now = new Date().getTime();
	var distance = now - initial_date;
	var days = Math.floor(distance / (1000*60*60*24));
	var hours = Math.floor((distance % (1000*60*60*24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
	var seconds = Math.floor((distance % (1000*60)) / 1000);

	days_text.innerHTML = days + "D";
	hours_text.innerHTML = hours + "H";
	minutes_text.innerHTML = minutes + "M";
	seconds_text.innerHTML = seconds + "S";

}, 1000);
