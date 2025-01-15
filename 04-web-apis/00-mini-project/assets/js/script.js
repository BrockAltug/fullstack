// ? Grab all the references to the DOM elements
const moodBoardEl = document.querySelector('#mood-board'); //grabs the reference to the mood board element
const addImageBtn = document.querySelector('#add-image'); //grabs the reference to the add image button
const imageUrlInput = document.querySelector('#image-url'); //grabs the reference to the image URL input field
const addTextBtn = document.querySelector('#add-text'); //grabs the reference to the add text button
const textInput = document.querySelector('#text-input'); //grabs the reference to the text input field
const clearBtn = document.querySelector('#clear-all'); //grabs the reference to the clear button

// ? We need to keep track of the elements that are added to the mood board and their positions
let tempStorageObject = { //keeps track of the elements that are added to the mood board and their positions
  images: [], //array to store the images
  text: [], //array to store the text
};

// ? We neet to keep track of the current element that is being dragged
let currentElement = null; //keeps track of the current element that is being dragged


clearBtn.addEventListener('click', function () {
  // TODO: Clear the local storage and refresh the page
localStorage.clear(); //clears the local storage
window.location.reload(); //reloads the page

});

function updateLocalStorage() {
  // TODO: Update the local storage with the tempStorageObject
  localStorage.setItem('moodBoardData', JSON.stringify(tempStorageObject)); //updates the local storage with the tempStorageObject
}

// ? Function to load from local storage. This function will be called on page load.
function loadFromLocalStorage() {
  // TODO: Load and parse the data from local storage and paint the images and text on the mood board
  const storedData = JSON.parse(localStorage.getItem('moodBoardData')); //loads and parses the data from local storage

  if (storedData) { //checks if the storedData is not null
    tempStorageObject = storedData; //sets the tempStorageObject to the storedData

    // Paint the stored images on mood board
    tempStorageObject.images.forEach((image) => { //paints the stored images on the mood board
      const img = document.createElement('img'); //creates an image element
      img.src = image.url; //sets the src attribute of the image element to the url property of the image object
      img.style.left = image.left; //paints the stored images on the mood board
      img.style.top = image.top; //paints the stored images on the mood board
      img.classList.add('draggable'); //adds the draggable class to the image element
      moodBoardEl.appendChild(img); //paints the stored images to the mood board
    });

    // TODO: Paint the stored text to the mood board
    tempStorageObject.text.forEach((text) => { //paints the stored text to the mood board
      const textDiv = document.createElement('div'); //creates a div element
      textDiv.textContent = text.text; //sets the text content of the div element
      textDiv.style.left = text.left; //sets the left position of the div element
      textDiv.style.top = text.top; //sets the top position of the div element
      textDiv.classList.add('text-item'); //adds the text-item class to the div element
      moodBoardEl.appendChild(textDiv); //appends the div element to the mood board
    });
  }
}

//  ? We create an event listener for the image URL input field. This will create an image element and attach it to the mood board with the URL provided by the user.
addImageBtn.addEventListener('click', function () { //event listener for the image URL input field
  const imageUrl = imageUrlInput.value; //gets the value of the image URL input field
  if (imageUrl) { //checks if the image URL input field is not empty
    // TODO: Create an image element, add a class of draggable, set the src attribute to the image URL provided by the user, and append it to the body element
    const img = document.createElement('img'); //creates an image element
    img.src = imageUrl; //sets the src attribute of the image element to the image URL provided by the user
    img.classList.add('draggable'); //adds the draggable class to the image element
    document.body.appendChild(img); //appends the image element to the body element

    // TODO: Set the `currentElement` to the image element you create.
    currentElement = img; //sets the currentElement to the image element

    // ? We attach the mouse move event listener to the document and the mood board div so that the element can be dragged anywhere on the screen and dropped only on the mood board div.
    attachMouseListeners(); //attaches the mouse listeners
  }
});

// ? We create an event listener for the text input field. This will create a div element and attach it to the mood board with the text provided by the user.
addTextBtn.addEventListener('click', function () { //event listener for the text input field
  const text = textInput.value; //gets the value of the text input field
  if (text) { //checks if the text input field is not empty
    const textDiv = document.createElement('div'); //creates a div element
    textDiv.classList.add('text-item', 'draggable'); //adds the text-item and draggable classes to the div element
    textDiv.textContent = text; //sets the text content of the div element
    document.body.appendChild(textDiv); //appends the text div to the body element

    // ? We set the current element to the text div so that we can update the position of the element when the mouse is moved.
    currentElement = textDiv; //sets the currentElement to the text div

    // ? We attach the mouse move event listener to the document and the click listener to the mood board div so that the element can be dragged anywhere on the screen, but dropped only on the mood board div.
    attachMouseListeners(); //attaches the mouse listeners
  }
});

function attachMouseListeners() { //function to attach the mouse listeners
  // TODO: Attach the mouse move event listener to the document and the click listener to the mood board div so that the element can be dragged anywhere on the screen, but dropped only on the mood board div.
  document.addEventListener('mousemove', mouseMoveHandler); //attaches the mouse move event listener to the document
  moodBoardEl.addEventListener('click', placeElementClickHandler); //attaches the click event listener to the mood board div

}

// ? This is the event handler for the mouse move event. This will be called whenever the mouse is moved on the screen.
// ? We check if the current element is set. If it is set, we update the position of the element to the mouse position.
function mouseMoveHandler(event) { //event handler for the mouse move event
  if (currentElement) { //checks if the currentElement is set
    currentElement.style.left = event.clientX + 'px'; //updates the left position of the currentElement to the mouse position
    currentElement.style.top = event.clientY + 'px'; //updates the top position of the currentElement to the mouse position
  }
}

// ? This is the event handler for the click event on the mood board. This will be called whenever the user clicks on the mood board.
// ? We check if the current element is set. If it is set, we attach the element to the mood board and reset the current element.
// ? When we click, we find the position of the mouse relative to the mood board and update the position of the element accordingly. to "place" it on the mood board.
function placeElementClickHandler(event) {
  if (currentElement) {
    // TODO: Explain what getBoundingClientRect() does
    const moodBoardRect = moodBoardEl.getBoundingClientRect(); //returns the size of an element and its position relative to the viewport

    // TODO: Explain what the following code does
    const left = `${event.clientX - moodBoardRect.left}px`; //calculates the left position of the element
    const top = `${event.clientY - moodBoardRect.top}px`; //calculates the top position of the element

    // ? Set the position of the element based on the calculated position above.
    currentElement.style.left = left; //sets the left position of the currentElement
    currentElement.style.top = top; //sets the top position of the currentElement

    // TODO: Explain why we remove the draggable class from the element
    currentElement.classList.remove('draggable'); //removes the draggable class from the currentElement

    // ? Append the element to the mood board with the already calculated position.
    moodBoardEl.appendChild(currentElement); //appends the currentElement to the mood board

    // TODO: Explain what the `tagName` property is used for
    if (currentElement.tagName === 'IMG') { //checks if the currentElement is an
      // ? Push the image object to the tempStorageObject images property/array
      tempStorageObject.images.push({ //pushes the image object to the tempStorageObject images property/array
        url: currentElement.src, //sets the url property of the image object to the src attribute of the currentElement
        left: left, //sets the left property of the image object to the left position of the currentElement
        top: top, //sets the top property of the image object to the top position of the currentElement
      });
    } else {
      // ? Push the text object to the tempStorageObject text property/array
      tempStorageObject.text.push({ //pushes the text object to the tempStorageObject text property/array
        text: currentElement.textContent, //sets the text property of the text object to the text content of the currentElement
        left: left, //sets the left property of the text object to the left position of the currentElement
        top: top, //sets the top property of the text object to the top position of the currentElement
      });
    }

    // Update local storage with the new tempStorageObject information
    updateLocalStorage(); //updates the local storage with the new tempStorageObject information

    // Reset current element
    currentElement = null; //resets the currentElement

    // Clear inputs
    imageUrlInput.value = ''; //clears the value of the imageUrlInput
    textInput.value = ''; //clears the value of the textInput

    // ? Remove event listeners for mouse move, so that the element is no longer draggable
    document.removeEventListener('mousemove', mouseMoveHandler); //removes the mouse move event listener
  }
}

// ? Load existing data from local storage on page load
window.onload = loadFromLocalStorage; //loads existing data from local storage on page load 
