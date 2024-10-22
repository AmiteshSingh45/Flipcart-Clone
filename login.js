function validateForm(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';

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

    // If form is valid, you can proceed with login process
    // For now, just log the credentials
    console.log('Email:', email);
    console.log('Password:', password);
}
