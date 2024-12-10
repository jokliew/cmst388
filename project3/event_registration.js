/*
		Your Name: <Enter Your Name>
		Last Modified Date: <Enter The Date in mm/dd/yyyy format>
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

const timerDisplay = document.getElementById("timer"); //Finds the "timer" element in the HTML 
const countdownDuration = 10 * 60 * 1000; //Calculates timer length in milliseconds
const endTime = Date.now() + countdownDuration; //Adds 10 min countdown to current time

const timer = setInterval(() => {
	const remainingTime = endTime - Date.now();
	if (remainingTime <= 0) {
	  clearInterval(timer); // Stop the timer
	  alert("Time's up! Redirecting to the registration page.");
	  location.href = location.href; // Reload the page
	  return;
	}

	const minutes = Math.floor(remainingTime / 60000);
	const seconds = Math.floor((remainingTime % 60000) / 1000);

	timerDisplay.textContent = ${minutes}:${seconds < 10 ? "0" : ""}${seconds};
}, 1000);


