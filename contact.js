function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add further validation if required

    // Example: Sending data to server (not implemented in this example)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can also display a confirmation message to the user
    alert('Your message has been sent. We will get back to you soon.');
    // Optionally, you can reset the form
    document.getElementById('contactForm').reset();
}
