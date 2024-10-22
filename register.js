function validateForm(event) {
    event.preventDefault();
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const fullnameError = document.getElementById('fullnameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Reset error messages
    fullnameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Simple name validation
    if (!fullname) {
        fullnameError.textContent = 'Please enter your full name';
        return;
    }

    // Simple email validation
    if (!email || !email.includes('@')) {
        emailError.textContent = 'Please enter a valid email address';
        return;
    }

    // Simple password validation
    if (!password || password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        return;
    }

    // If form is valid, you can proceed with registration process
    // For now, just log the details
    console.log('Full Name:', fullname);
    console.log('Email:', email);
    console.log('Password:', password);
}
