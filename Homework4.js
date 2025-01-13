document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get input values
    const firstName = document.getElementById('firstName').value.trim();
    const middleInitial = document.getElementById('middleInitial').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const matriculationNumber = document.getElementById('matriculationNumber').value.trim();

    // Validation regex patterns
    const alphaPattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const numericPattern = /^[0-9]+$/;

    // Validate first name
    if (!alphaPattern.test(firstName)) {
        alert('First Name must contain only alphabetic characters.');
        return;
    }

    // Validate middle initial (if provided)
    if (middleInitial && !alphaPattern.test(middleInitial)) {
        alert('Middle Initial must be an alphabetic character.');
        return;
    }

    // Validate last name
    if (!alphaPattern.test(lastName)) {
        alert('Last Name must contain only alphabetic characters.');
        return;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate matriculation number
    if (!numericPattern.test(matriculationNumber)) {
        alert('Matriculation Number must contain only digits.');
        return;
    }

    // If all validations pass
    alert('Form submitted successfully!');
    // Optionally, submit the form or handle it as needed
    // this.submit(); // Uncomment to allow form submission
});
