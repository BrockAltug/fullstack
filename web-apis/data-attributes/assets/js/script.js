const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target; // Get the clicked element

  
    // Get the current value of the box's data-state attribute
    const dataState = element.getAttribute('data-state');

    if (dataState === 'hidden') {
      // Change the data-state attribute's value to 'revealed'
      element.setAttribute('data-state', 'revealed');

      // Display the number by setting the text content
      element.textContent = element.getAttribute('data-number');
    } else {
      // Change the data-state attribute's value back to 'hidden'
      element.setAttribute('data-state', 'hidden');

      // Hide the number by clearing the text content
      element.textContent = '';
    }
});