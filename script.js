document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    clearMessages();

    // Validate email format
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
        showError('Please provide a valid email address');
        return;
    }

    // Simulate AJAX request (in real use, you'd actually send data to a server)
    setTimeout(() => {
        showSuccess(`Thank you for subscribing! Your email (${email}) has been added.`);
        emailInput.value = ''; // Clear the input after successful submission
    }, 1000);
});

function isValidEmail(email) {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(message) {
    const errorElement = document.getElementById('emailError');
    errorElement.textContent = message;
}

function showSuccess(message) {
    const successElement = document.getElementById('successMessage');
    successElement.textContent = message;
}

function clearMessages() {
    showError('');
    showSuccess('');
}