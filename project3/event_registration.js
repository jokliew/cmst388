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
function calculateTotal() {
	// Get the HTML input field where the user enters the number of tickets
	const ticketInput = document.getElementById("numTickets");
	// Get the HTML element to display error messages for ticket validation
	const ticketError = document.getElementById("msgTickets");
	// Get the HTML section where contact information is displayed
	const contactSection = document.getElementById("contactInformation");
	// Get the HTML field where the total ticket cost will be displayed
	const ticketTotal = document.getElementById("totalCost");


	console.log("Retrieved HTML elements:", {
		ticketInput,
		ticketError,
		contactSection,
		ticketTotal,
	  }); // Step 2: Verify element retrieval

	  
  
	// Parse the user's input as an integer (whole number)
	const ticketCount = parseInt(ticketInput.value, 10);
  
	console.log(`Parsed ticketCount: ${ticketCount}`); // Step 3: Log parsed input

	// Clear any previous error styles or messages
	ticketInput.style.backgroundColor = ""; // Reset the input field's background color
	ticketError.textContent = ""; // Clear the error message text

	console.log("Cleared previous styles and messages."); // Step 4: Clear actions
  
	//VALIDATION DEBUG 

	 // Validation
	 if (isNaN(ticketCount)) {
		console.warn("Input is not a number!"); // Step 5: Warn about invalid input
	  } else if (ticketCount < minTickets || ticketCount > maxTickets) {
		console.warn(`Input out of range (${minTickets}-${maxTickets}): ${ticketCount}`); // Step 6: Warn about out-of-range input
	  }
	  //End debug
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
	  console.log("Validation failed: Displayed error message and reset fields."); // Step 7: Log failure
	  return false;
	}
  
	/*
	 * Calculate the total cost of the tickets if the input is valid:
	 * - Multiply the number of tickets by the ticket price (including surcharge)
	 */
	const totalCost = ticketCount * (costPerTicket + ticketSurcharge);
	console.log(`Calculated totalCost: $${totalCost.toFixed(2)}`); // Step 8: Log calculated cost
	// Display the total cost in the specified field, formatted to 2 decimal places
	ticketTotal.value = `$${totalCost.toFixed(2)}`;
  
	// Show the contact information section since the input is valid
	contactSection.style.display = "block";
	console.log("Validation successful: Updated total cost and displayed contact section."); // Step 9: Log success

	// Exit the function and indicate validation success
	return true;
  }
  function validateContactInfo() {
	const nameInput = document.getElementById("name");
	const emailInput = document.getElementById("email");
	const nameError = document.getElementById("msgname");
	const emailError = document.getElementById("msgemail");
  
	let isValid = true;
  
	// Clear previous errors and styles
	nameInput.style.backgroundColor = "";
	emailInput.style.backgroundColor = "";
	nameError.textContent = "";
	emailError.textContent = "";
  
	// Validate Name
	if (nameInput.value.trim() === "") {
	  nameError.textContent = "Please enter your name.";
	  nameInput.style.backgroundColor = "pink";
	  isValid = false;
	}
  
	// Validate Email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(emailInput.value.trim())) {
	  emailError.textContent = "Please enter a valid email address.";
	  emailInput.style.backgroundColor = "pink";
	  isValid = false;
	}
  
	return isValid;
  }



  function completePurchase() {
	
	document.getElementById("submit").addEventListener("click", completePurchase);

	const ticketTotal = document.getElementById("totalCost")

	if (!calculateTotal() || !validateContactInfo()) {
	  return false; // Prevent form submission
	}
  
	// Stop the timer
	if (typeof timer !== "undefined") {
		clearInterval(timer); // Stop the timer
		document.getElementById("timer").innerHTML = ""; // Clear the timer display
		console.log("Timer destroyed after successful submission.");
	  }
	
  
	// Display success message
	alert(`Thank you for your purchase! Total cost: ${ticketTotal.value}`);
	return true; // Allow form submission
  }