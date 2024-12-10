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

    // Set the countdown duration in milliseconds (10 minutes)
    var countDownDate = new Date().getTime() + 10 * 60 * 1000;

    // Update the countdown every 1 second
    var x = setInterval(function () {
      // Get the current time
      var now = new Date().getTime();

      // Find the remaining time
      var distance = countDownDate - now;

      // Time calculations for minutes and seconds
      var minutes = Math.floor(distance / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Format the seconds to always show two digits
      var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

      // Display the result in the element with id="timer"
      document.getElementById("timer").innerHTML = minutes + ":" + formattedSeconds;

      // If the countdown is finished, stop the timer and display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
        alert("Time's up! Redirecting to the registration page.");
        location.href = location.href; // Reload the page
      }
    }, 1000);

