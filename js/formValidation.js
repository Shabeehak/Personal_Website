function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Validation Patterns
    var namePattern = /^[a-zA-Z\s]+$/; // Name must contain only letters and spaces
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phonePattern = /^\d{10}$/;
    var minMessageLength = 20; // Minimum 20 characters for the message

    // Name Validation
    if (!namePattern.test(name)) {
        alert("Please enter a valid name. No numbers or special characters are allowed.");
        return false;
    }

    // Email Validation
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone Validation
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    // Message Validation
    if (message.trim().length < minMessageLength) {
        alert("Your message must be at least " + minMessageLength + " characters long.");
        return false;
    }

    return true;
}