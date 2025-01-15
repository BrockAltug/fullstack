// TODO: Define a Validate class with an isPassword() function that takes in a password parameter.
class Validate { // class to validate password
  isPassword(password) { // checks if password is valid
    return password.length > 0; // returns true if password is not empty
  }
}
// TODO: Export the Validate class from this file.
module.exports = Validate;
