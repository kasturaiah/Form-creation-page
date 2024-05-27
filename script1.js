document.addEventListener('DOMContentLoaded', () => {
    showSignUpForm();
});

function showSignUpForm() {
    document.getElementById('signUpForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

function showLoginForm() {
    document.getElementById('signUpForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
}

function signUp() {
    const username = document.getElementById('signUpUsername').value.trim();
    const email = document.getElementById('signUpEmail').value.trim();
    const password = document.getElementById('signUpPassword').value.trim();

    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registration successful. Please log in.');
    showLoginForm();
}

function login() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful');
        window.location.href = 'welcome.html';
    } else {
        alert('Invalid username or password');
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
