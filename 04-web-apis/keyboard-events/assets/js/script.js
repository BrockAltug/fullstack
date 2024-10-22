function keydownAction(event) {
  // TODO: Complete keydown function
  document.querySelector("#status").textContent = "KEYDOWN Event"; // Update the text content of the `#status` element to show the keydown event
  document.querySelector("#key").textContent = event.key; // Update the text content of the `#key` element to show the key that was pressed
  document.querySelector("#code").textContent = event.code; // Update the text content of the `#code` element to show the code of the key that was pressed
}

function keyupAction() {
  document.querySelector("#status").textContent = "KEYUP Event";
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", keydownAction); // Add an event listener to the `document` to listen for a "keydown" event.


