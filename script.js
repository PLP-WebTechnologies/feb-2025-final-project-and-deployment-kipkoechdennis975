// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');
    
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill in all fields.';
        formMessage.style.color = 'red';
    } else if (!email.includes('@')) {
        formMessage.textContent = 'Please enter a valid email.';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = 'green';
        document.getElementById('contactForm').reset();
    }
});