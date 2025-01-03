import { useState } from 'react';
import './style.css';

// Import helper functions to validate email and password
import { checkPassword, validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for email, username, password, and error message
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState(''); // State for password
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Update state based on the input type
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'password') { // Update password state
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email and username
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }

    // Validate password
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }

    // Clear input fields upon successful submission
    setUserName('');
    setPassword(''); // Reset password to an empty string
    setEmail('');
    setErrorMessage('');
    alert(`Hello ${userName}`);
  };

  return (
    <div className="container text-center">
      <h1>Hello {userName}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        {/* Password input field */}
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;