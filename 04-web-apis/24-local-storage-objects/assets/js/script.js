const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signUpButton = document.querySelector('#sign-up');

signUpButton.addEventListener('click', function (event) {
  event.preventDefault();

  // TODO: Create user object from submission
  //creates userData to store firstName, lastName, email, password into local storage
    const userData = {
      firstName : firstNameInput.value.trim(), //.trim removes the whitespace 
      lastName : lastNameInput.value.trim(),
      email : emailInput.value.trim(),
      password : passwordInput.value.trim()
    };
  

  // TODO: Set new submission to local storage
  localStorage.setItem("user", JSON.stringify(userData))
  
});
