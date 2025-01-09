const loginFormHandler = async (event) => {
  // Prevents the default form submission behavior to allow custom handling
  event.preventDefault();

  // Retrieves the values of the email and password input fields and removes whitespace
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Sends a POST request to the login endpoint with the provided email and password
    const response = await fetch('/api/users/login', {
      method: 'POST', // HTTP method to create or update a resource
      body: JSON.stringify({ email, password }), // Converts the email and password to a JSON string
      headers: { 'Content-Type': 'application/json' }, // Specifies the content type of the request
    });

    if (response.ok) {
      // Redirects the user to the homepage if the login is successful
      document.location.replace('/');
    } else {
      // Displays an alert if the login fails
      alert('Failed to log in');
    }
  }
};

// Adds an event listener to the login form that triggers the `loginFormHandler` function on form submission
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);