// WRITE YOUR CODE BELOW
// Objects are a collection of properties
const customerDrink = { 
    // Properties are made up of key-value pairs
    name: "Mocha", // Key: name, Value: "Mocha"
    sugars: 3, // Key: sugars, Value: 3
    ready: true // Key: ready, Value: true
  };

  
  if (customerDrink.ready) { // If the drink is ready
    console.log("Ready for pickup!"); // Log "Ready for pickup!"
  } else { // If the drink is not ready
    console.log("Still in progress..."); // Log "Still in progress..."
  }

    // Log the customer's order
  alert(`The customer ordered a ${customerDrink.name} with ${customerDrink.sugars} sugars, and it is ${customerDrink.ready ? "ready" : "not ready"}.`); // The customer ordered a Mocha with 3 sugars, and it is ready.
  console.log(`The customer ordered a ${customerDrink.name} with ${customerDrink.sugars} sugars, and it is ${customerDrink.ready ? "ready" : "not ready"}.`);