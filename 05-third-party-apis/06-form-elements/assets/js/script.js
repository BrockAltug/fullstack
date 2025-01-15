const shoppingFormEl = $('#shopping-form');
const shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
  event.preventDefault(); // Prevents the page from refreshing on form submission
  
  // Capture the value from the input field
  const itemValue = $('#shopping-input').val().trim();
  
  // Check if the input is not empty
  if (itemValue !== '') {
    // Create a new <li> element with the input value
    const listItemEl = $('<li>').text(itemValue);
    
    // Append the new <li> to the shopping list
    shoppingListEl.append(listItemEl);
    
    // Clear the input field after submission
    $('#shopping-input').val('');
  }
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleFormSubmit);