# Blocking Stack Example: Pause Function

This project illustrates the use of a custom `pause` function to block the JavaScript execution stack for a specified time, integrated with form submission to simulate delays.

## Features

- Blocks JavaScript execution for a given duration using `pause`.
- Prevents form submission temporarily, simulating a waiting period.

## Code Example

```javascript
const pause = (milliSeconds) => {
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.target.querySelector("button");
  button.disabled = true;
  button.textContent = "Waiting 8 seconds...";
  pause(8000);
  button.disabled = false;
  button.textContent = "Submit";
  alert("Form submitted!");
});
```

## Key Concepts

- **Custom Pause Function**: Simulates a blocking delay in JavaScript.
- **Form Event Handling**: Demonstrates integration with form submission.

## How to Use

Include the script in an HTML file with the following structure:

```html
<form>
  <button type="submit">Submit</button>
</form>
<script src="script.js"></script>
```

Submit the form to experience an 8-second delay.
