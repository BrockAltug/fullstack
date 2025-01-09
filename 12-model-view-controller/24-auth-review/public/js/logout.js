const logout = async () => {
  // Sends a POST request to the logout endpoint to end the user's session
  const response = await fetch('/api/users/logout', {
    method: 'POST', // HTTP method to send a logout request
    headers: { 'Content-Type': 'application/json' }, // Specifies the content type of the request
  });

  if (response.ok) {
    // Redirects the user to the login page after a successful logout
    document.location.replace('/login');
  } else {
    // Displays an alert if the logout fails
    alert('Failed to log out');
  }
};

// Adds an event listener to the logout button that triggers the `logout` function when clicked
document.querySelector('#logout').addEventListener('click', logout);