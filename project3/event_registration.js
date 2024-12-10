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

	// Function to validate the number of tickets
function validateTickets() {
	// Get the HTML input field where the user enters the number of tickets
	const ticketInput = document.getElementById("numTickets");
	// Get the HTML element to display error messages for ticket validation
	const ticketError = document.getElementById("msgTickets");
	// Get the HTML section where contact information is displayed
	const contactSection = document.getElementById("contactInformation");
	// Get the HTML field where the total ticket cost will be displayed
	const ticketTotal = document.getElementById("totalCost");
  
	// Parse the user's input as an integer (whole number)
	const ticketCount = parseInt(ticketInput.value, 10);
  
	// Clear any previous error styles or messages
	ticketInput.style.backgroundColor = ""; // Reset the input field's background color
	ticketError.textContent = ""; // Clear the error message text
  
	/*
	 * Validation Step:
	 * - Check if the input is a valid number
	 * - Ensure the number is within the allowed range (minTickets to maxTickets)
	 */
	if (isNaN(ticketCount) || ticketCount < minTickets || ticketCount > maxTickets) {
	  // Display an error message indicating the valid ticket range
	  ticketError.textContent = `Please enter a valid number of tickets (${minTickets}-${maxTickets}).`;
	  // Highlight the input field with a pink background to indicate an error
	  ticketInput.style.backgroundColor = "pink";
	  // Hide the contact information section since the input is invalid
	  contactSection.style.display = "none";
	  // Reset the total cost field to "$0.00"
	  ticketTotal.value = "$0.00";
	  // Exit the function and indicate validation failure
	  return false;
	}
  
	/*
	 * Calculate the total cost of the tickets if the input is valid:
	 * - Multiply the number of tickets by the ticket price (including surcharge)
	 */
	const totalCost = ticketCount * (costPerTicket + ticketSurcharge);
  
	// Display the total cost in the specified field, formatted to 2 decimal places
	ticketTotal.value = `$${totalCost.toFixed(2)}`;
  
	// Show the contact information section since the input is valid
	contactSection.style.display = "block";
  
	// Exit the function and indicate validation success
	return true;
  }
  