/*
Function to validate form inputs before submission.
This function checks various fields such as name, address, phone, email, and contact methods
to ensure they meet the required criteria. If any validation fails, it alerts the user and
prevents the form submission. 
 @returns {boolean} Returns true if all validations pass, otherwise false.
 */
function validateForm() {
  // Validate Name Fields
  const firstName = document.getElementById("firstName").value.trim(); // Get trimmed value of the First Name field
  const lastName = document.getElementById("lastName").value.trim(); // Get trimmed value of the Last Name field

  // Check if First and Last Name contain only alphabetic characters
  if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      alert("First and Last Name must contain only alphabetic characters."); // Alert the user if validation fails
      return false; // Stop form submission
  }

  // Validate Address Fields
  const address = document.getElementById("address").value.trim(); // Get trimmed value of the Address field
  const city = document.getElementById("city").value.trim(); // Get trimmed value of the City field
  const state = document.getElementById("state").value; // Get the selected value of the State dropdown
  const zip = document.getElementById("zip").value.trim(); // Get trimmed value of the ZIP Code field

  // Ensure Address, City, State are not empty and ZIP is a valid 5-digit number
  if (address === "" || city === "" || state === "" || !/^\d{5}$/.test(zip)) {
      alert("Please provide a valid address, city, state, and 5-digit zip code."); // Alert user if validation fails
      return false; // Stop form submission
  }

  // Validate Phone Fields
  const areaCode = document.getElementById("areaCode").value.trim(); // Get trimmed value of the Area Code field
  const phoneNumber = document.getElementById("phoneNumber").value.trim(); // Get trimmed value of the Phone Number field

  // Check if Area Code is 3 digits and Phone Number is 7 digits
  if (!/^\d{3}$/.test(areaCode) || !/^\d{7}$/.test(phoneNumber)) {
      alert("Please provide a valid 10-digit phone number (3-digit area code + 7-digit phone number)."); // Alert user if validation fails
      return false; // Stop form submission
  }

  // Validate Email
  const email = document.getElementById("email").value.trim(); // Get trimmed value of the Email field
  const confirmEmail = document.getElementById("confirmEmail").value.trim(); // Get trimmed value of the Confirm Email field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to validate email format

  // Check if Email matches the regex and Confirm Email is identical to Email
  if (!emailRegex.test(email) || email !== confirmEmail) {
      alert("Please provide a valid email address and ensure both email fields match."); // Alert user if validation fails
      return false; // Stop form submission
  }

  // Validate Contact Methods
  const contactMethods = document.querySelectorAll('input[name="contact"]:checked'); // Get all selected contact methods

  // Check if at least two contact methods are selected
  if (contactMethods.length < 2) {
      alert("Please select at least two contact methods."); // Alert user if validation fails
      return false; // Stop form submission
  }

  // If all validations pass, show success message
  alert("Form submitted successfully!");
  return true; // Allow form submission
}

/*
 Function to reset the form to its default state.
 Clears all inputs in the form and displays a confirmation message.
*/
function resetForm() {
  document.getElementById("registrationForm").reset(); // Reset all form fields to their initial state
  alert("Form has been reset."); // Inform the user that the form has been reset
}
