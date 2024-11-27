// function to block the stack for x number of milliseconds
const pause = milliSeconds => {
  // get the current time
  var startTime = new Date().getTime(); 
  // block stack until time's up
  while (new Date().getTime() < startTime + milliSeconds); 
};

// Add an event listener to the form
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const button = event.target.querySelector('button');
  button.disabled = true; // Disable the button to enforce wait
  button.textContent = 'Waiting 8 seconds...';

  // Use pause to block the stack for 8 seconds only on submission
  pause(8000);

  button.disabled = false; // Re-enable the button
  button.textContent = 'Submit';
  alert('Form submitted!'); // Notify the user after delay
});