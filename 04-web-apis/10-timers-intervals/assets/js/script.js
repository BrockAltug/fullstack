const timerEl = document.getElementById('countdown');
const mainEl = document.getElementById('main');

const message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
const words = message.split(' ');

function countdown() {
  let timeLeft = 5;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  const timeInterval = setInterval(function () {
    //
    // YOUR CODE HERE
    //

    timerEl.textContent = timeLeft + ' seconds left'; // update the countdown display with the time left
    timeLeft--; // decrement the time left by 1
    if (timeLeft === 0) { // if timeLeft reaches 0, stop the countdown and start displaying the message
      clearInterval(timeInterval); // stop the countdown interval
      displayMessage(); // call function to display the message one word at a time
    }
  }, 1000); // set the interval to run every 1000 milliseconds
}

// Displays the message one word at a time
function displayMessage() {
  let wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  const msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();
