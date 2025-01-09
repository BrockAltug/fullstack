# CS Callback Queue

## Concepts Covered

1. **Callback Queue in JavaScript**:

   - A mechanism in JavaScript for managing asynchronous operations.
   - Ensures non-blocking behavior by executing tasks in a separate thread.

2. **setTimeout Function**:

   - Executes a callback function after a specified delay (in milliseconds).
   - Operates asynchronously by pushing the callback to the **Callback Queue**.

3. **Event Loop**:

   - Continuously monitors the **Call Stack** and **Callback Queue**.
   - Executes queued callbacks only when the Call Stack is empty.

4. **CSS Manipulation via JavaScript**:
   - Dynamically modifies CSS classes to alter the appearance of elements.

---

## Code Overview

### JavaScript Code

```javascript
// wait 8 seconds in a separate thread
setTimeout(() => {
  // remove the class that hides the element
  document.querySelector("form button").classList.remove("display-none");
}, 8000);
```

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Unblock the UI</title>
    <link rel="stylesheet" href="./assets/css/jass.css" />
  </head>

  <body class="bg-primary m-5">
    <div class="container flex-column justify-center">
      <h1 class="page-title text-secondary">Wait 8 Seconds, Please</h1>

      <form>
        <input type="text" class="form-input" placeholder="Name" />
        <textarea class="form-input" placeholder="Comment"></textarea>
        <button class="btn form-input display-none">Submit</button>
      </form>
    </div>

    <script src="./assets/js/script.js"></script>
  </body>
</html>
```

---

## Key Points

1. **Callback Execution**:

   - The `setTimeout` callback is executed after an 8-second delay.
   - The `classList.remove('display-none')` removes the class to display the hidden button.

2. **Non-Blocking UI**:

   - The UI remains interactive during the delay, as the `setTimeout` runs asynchronously.

3. **Dynamic Styling**:

   - JavaScript interacts with the DOM to dynamically show the `Submit` button after the delay.

4. **Event Loop Workflow**:
   - The `setTimeout` function registers the callback in the Callback Queue.
   - Once the Call Stack is clear, the Event Loop moves the callback for execution.

---

## How to Run

1. **Set Up the Project**:

   - Ensure you have the required `index.html` and `script.js` files along with the `jass.css` file for styling.

2. **Open the HTML File**:

   - Open `index.html` in your browser.

3. **Observe Behavior**:

   - Upon loading, the `Submit` button will be hidden.
   - After an 8-second delay, the button becomes visible.

4. **Experiment**:
   - Modify the delay in `script.js` to understand how the Callback Queue works.
   - Add more asynchronous functions to see how JavaScript handles them.

---

## Learning Objectives

1. Understand how JavaScript manages asynchronous operations.
2. Explore the Callback Queue and its interaction with the Event Loop.
3. Learn to manipulate CSS dynamically through JavaScript.
4. Develop a deeper understanding of non-blocking UI principles.
