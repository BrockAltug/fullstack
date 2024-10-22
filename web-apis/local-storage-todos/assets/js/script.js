const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

const todos = [];

// TODO: What is the purpose of this function?
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  todoList.innerHTML = ''; // clears the list
  todoCountSpan.textContent = todos.length; // updates the count of todos

  // TODO: Describe the functionality of the following `for` loop.
  for (let i = 0; i < todos.length; i++) { // iterates through the todos array 
    const todo = todos[i]; // gets the current todo 

    const li = document.createElement('li'); // creates a new list item 
    li.textContent = todo; // sets the text content of the list item 
    li.setAttribute('data-index', i); // sets the data-index attribute of the list item 

    const button = document.createElement('button'); // creates a new button 
    button.textContent = 'Complete ✔️'; // sets the text content of the button 

    li.appendChild(button); // appends the button to the list item 
    todoList.appendChild(li); // appends the list item to the todo list 
  }
}

// TODO: What is the purpose of the following function?
function init() { // initializes the app 
  // TODO: What is the purpose of the following line of code?
  const storedTodos = JSON.parse(localStorage.getItem('todos')); // gets the todos from local storage and parses them into an array 
  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) { // checks if there are todos in local storage 
    todos = storedTodos; // sets the todos array to the stored todos array 
  }
  // TODO: Describe the purpose of the following line of code.
  renderTodos(); // renders the todos to the page
}

function storeTodos() { // stores the todos in local storage 
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem('todos', JSON.stringify(todos)); // sets the todos in local storage 
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener('submit', function (event) { // listens for the form to be submitted 
  event.preventDefault(); // prevents the default behavior of the form
  const todoText = todoInput.value.trim(); // gets the value of the input and trims it  
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === '') { // checks if the input is empty
    return; // exits the function
  }
  // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText); // adds the todo to the todos array 
  todoInput.value = ''; // clears the input

  // TODO: What will happen when the following functions are called?
  storeTodos(); // stores the todos in local storage 
  renderTodos(); // renders the todos to the page
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener('click', function (event) { // listens for a click on the todo list 
  const element = event.target; // gets the element that was clicked 
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches('button') === true) { // checks if the element is a button
    const index = element.parentElement.getAttribute('data-index');
    todos.splice(index, 1); // removes the todo from the todos array
    // TODO: What will happen when the following functions are called?
    storeTodos(); // stores the todos in local storage
    renderTodos(); // renders the todos to the page 
  }
}); 

init(); // initializes the app 
