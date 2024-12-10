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
// Constants for ticket costs
const costPerTicket = 5.00;
const ticketSurcharge = 0.50;
const timerDisplay = document.getElementById("timer");
const countdownDuration = 10 * 60 * 1000; // 10 minutes in milliseconds
const endTime = Date.now() + countdownDuration;

// Countdown Timer
const timer = setInterval(() => {
  const remainingTime = endTime - Date.now();
  if (remainingTime <= 0) {
    clearInterval(timer);
    alert("Time's up! Redirecting to the registration page.");
    location.href = location.href; // Reload the page
    return;
  }

  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);
  timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}, 1000);

// Function to validate tickets
function calculateTotal() {
  const ticketInput = document.getElementById("numTickets");
  const ticketError = document.getElementById("msgTickets");
  const contactSection = document.getElementById("contactInformation");
  const totalCostField = document.getElementById("totalCost");

  const ticketCount = parseInt(ticketInput.value, 10);
  ticketInput.style.backgroundColor = "";
  ticketError.textContent = "";

  if (isNaN(ticketCount) || ticketCount < 1 || ticketCount > 3) {
    ticketError.textContent = "Please enter a valid number of tickets (1-3).";
    ticketInput.style.backgroundColor = "pink";
    contactSection.style.display = "none";
    totalCostField.value = "$0.00";
    return;
  }

  const totalCost = ticketCount * (costPerTicket + ticketSurcharge);
  totalCostField.value = `$${totalCost.toFixed(2)}`;
  contactSection.style.display = "block";
}

// Function to validate contact information
function validateContactInfo() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("msgname");
  const emailError = document.getElementById("msgemail");

  let isValid = true;

  nameInput.style.backgroundColor = "";
  nameError.textContent = "";
  emailInput.style.backgroundColor = "";
  emailError.textContent = "";

  if (!nameInput.value.trim()) {
    nameError.textContent = "Name is required.";
    nameInput.style.backgroundColor = "pink";
    isValid = false;
  }

  if (!emailInput.value.trim()) {
    emailError.textContent = "Email is required.";
    emailInput.style.backgroundColor = "pink";
    isValid = false;
  }

  return isValid;
}

// Function to handle purchase submission
function completePurchase() {
  if (!calculateTotal() || !validateContactInfo()) return;

  clearInterval(timer);
  const ticketInput = document.getElementById("numTickets");
  const ticketCount = parseInt(ticketInput.value, 10);
  const totalCost = ticketCount * (costPerTicket + ticketSurcharge);
  alert(`Thank you for your purchase! Total cost: $${totalCost.toFixed(2)}`);
}

// Event Listeners
document.getElementById("numTickets").addEventListener("input", calculateTotal);
document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission for testing
  completePurchase();
});
