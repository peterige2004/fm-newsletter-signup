// Get the email input element and the error message element
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

// Function to validate an email address
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent form from submitting

  const userEmail = emailInput.value;

  if (isValidEmail(userEmail)) {
    // Valid email, proceed to the next page
    window.location.href = 'thanks.html'; // Replace 'thanks.html' with your actual next page URL
  } else {
    // Invalid email, display error message
    emailError.textContent = 'Please enter a valid email address.';
  }
}

// Add a click event listener to the submit button
const submitButton = document.getElementById('email-error');
submitButton.addEventListener('click', handleSubmit);
