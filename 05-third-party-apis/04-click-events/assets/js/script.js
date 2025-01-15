const passwordBtnEl = $('.password-btn');
const passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  let password = '';
  for (let i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

// Change 'dblclick' to 'click' to allow single-click password generation
passwordBtnEl.on('click', function () {
  const newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});