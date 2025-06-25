// Register form submission

const LoginContainer = document.querySelector('.section-1');
const registerLink = document.getElementById('register-link');
const registerContainer = document.getElementById('register-container');
const registerForm = document.getElementById('register-form');
const welcome=document.querySelector('.section-3');

const dashboardTitle = document.getElementById('dashboard-title');
const dashboardContainer = document.querySelector('.section-4');

let nameInput = document.getElementById('new-username');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone');
let addressInput = document.getElementById('address');
let passwordInput = document.getElementById('new-password');

const submitRegisterButton = document.getElementById('submit-register');

// Show the register form when the link is clicked
registerLink.addEventListener('click', function(event) {
    event.preventDefault();
    LoginContainer.style.display = 'none';
    document.getElementById('login-title').style.display = 'none';
    registerContainer.style.display = 'block';
});

submitRegisterButton.addEventListener('click', function(event) {
    
    // Get the values from the input fields
    emailInput = emailInput.value.trim();
    nameInput = nameInput.value.trim();
    phoneInput = phoneInput.value.trim();
    addressInput = addressInput.value.trim();
    passwordInput = passwordInput.value.trim();

    console.log(nameInput);
    console.log(passwordInput);
    
    let data = {
        username: nameInput,
        email: emailInput,
        phone: phoneInput,
        address: addressInput,
        password: passwordInput
    };
    // Prevent form submission
    event.preventDefault();

    localStorage.setItem('userData', JSON.stringify(data));
    // Log the data to the console (for demonstration purposes)

    let storedData = localStorage.getItem('userData');
    if (storedData) {
        data = JSON.parse(storedData);
    } else {
        data = {};
    }
    console.log('User Data:', data);


    
    // Clear the form fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    addressInput.value = '';
    passwordInput.value = '';

    
    // Hide the register form
    registerContainer.style.display = 'none';


    // Show the success message
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    LoginContainer.style.display = 'none';

    successMessage.textContent = 'Registration successful! You can now log in.';
    setTimeout(() => {
        successMessage.style.display = 'none';
        LoginContainer.style.display = 'block';
    }, 3000); // Hide the message after 3 seconds
});


//  Login form submission

let usernameLoginInput = document.getElementById('username');
let passwordLoginInput = document.getElementById('password');
const submitLoginButton = document.getElementById('submit-login');

submitLoginButton.addEventListener('click', function(event) {

    localStorage.getItem('userData');

    usernameLoginInput = usernameLoginInput.value.trim();
    passwordLoginInput = passwordLoginInput.value.trim();
    console.log(usernameLoginInput);
    console.log(passwordLoginInput);
    
    // Retrieve user data from localStorage
    let storedData = JSON.parse(localStorage.getItem('userData'));


    // Check if user data exists and validate login
    if(storedData.username === usernameLoginInput && storedData.password === passwordLoginInput) {
        console.log('Login successful!');

        // Hide the login form
        LoginContainer.style.display = 'none';
        registerContainer.style.display = 'none';
        document.getElementById('login-title').style.display = 'none';
        dashboardTitle.style.display = 'block';

        // Show the welcome section
        welcome.style="display: block;";
        dashboardContainer.style="display: flex;flex-direction: column;align-items: center;justify-content: center;";
        welcome.innerHTML = `<h2>Welcome, ${storedData.username.charAt(0).toUpperCase()}${storedData.username.slice(1)}!</h2>
                             <p>Your email: ${storedData.email}</p>
                             <p>Your phone: ${storedData.phone}</p>
                             <p>Your address: ${storedData.address}</p>`;        
    } else {
        console.log('Invalid username or password.');
    }
    // Prevent form submission
    event.preventDefault();
})
