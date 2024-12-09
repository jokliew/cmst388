function validateForm() {
    // Validate Name Fields
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
      alert("First and Last Name must contain only alphabetic characters.");
      return false;
    }
  
    // Validate Address Fields
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value.trim();
    if (address === "" || city === "" || state === "" || !/^\d{5}$/.test(zip)) {
      alert("Please provide a valid address, city, state, and 5-digit zip code.");
      return false;
    }
  
    // Validate Phone Fields
    const areaCode = document.getElementById("areaCode").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    if (!/^\d{3}$/.test(areaCode) || !/^\d{7}$/.test(phoneNumber)) {
      alert("Please provide a valid 10-digit phone number (3-digit area code + 7-digit phone number).");
      return false;
    }
  
    // Validate Email
    const email = document.getElementById("email").value.trim();
    const confirmEmail = document.getElementById("confirmEmail").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email !== confirmEmail) {
      alert("Please provide a valid email address and ensure both email fields match.");
      return false;
    }
  
    // Validate Contact Methods
    const contactMethods = document.querySelectorAll('input[name="contact"]:checked');
    if (contactMethods.length < 2) {
      alert("Please select at least two contact methods.");
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  
  function resetForm() {
    document.getElementById("registrationForm").reset();
    alert("Form has been reset.");
  }
  