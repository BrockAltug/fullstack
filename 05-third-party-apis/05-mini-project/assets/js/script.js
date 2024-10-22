// ? Grab references to the important DOM elements.
const timeDisplayEl = $('#time-display');
const projectDisplayEl = $('#project-display');
const projectFormEl = $('#project-form');
const projectNameInputEl = $('#project-name-input');
const projectTypeInputEl = $('#project-type-input');
const projectDateInputEl = $('#taskDueDate');

// ? Helper function that displays the time, this is called every second in the setInterval function below.
function displayTime() {
  const rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}

// ? Reads projects from localStorage. If no projects are stored, it returns an empty array.
function readProjectsFromStorage() {
  const projects = localStorage.getItem('projects');
  return projects ? JSON.parse(projects) : [];
}

// ? Saves the array of projects into localStorage.
function saveProjectsToStorage(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// ? Creates a project card from the information passed in `project` parameter and returns it.
function createProjectCard(project) {
  const taskCard = $('<div>').addClass('card project-card draggable my-3').attr('data-project-id', project.id);

  // Create the card header and add project name
  const cardHeader = $('<h4>').addClass('card-header').text(project.name);

  // Create the card body
  const cardBody = $('<div>').addClass('card-body');

  // Add project type and due date as paragraphs in the card body
  const projectType = $('<p>').addClass('card-text').text(`Type: ${project.type}`);
  const projectDueDate = $('<p>').addClass('card-text').text(`Due Date: ${project.dueDate}`);

  // Create a delete button with the correct project ID
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', project.id);  // Set the data attribute with project ID

  // ? Sets the card background color based on due date if the task is not marked as done.
  if (project.dueDate && project.status !== 'done') {
    const now = dayjs();
    const taskDueDate = dayjs(project.dueDate, 'DD/MM/YYYY');

    if (now.isSame(taskDueDate, 'day')) {
      taskCard.addClass('bg-warning text-white');
    } else if (now.isAfter(taskDueDate)) {
      taskCard.addClass('bg-danger text-white');
      cardDeleteBtn.addClass('border-light');
    }
  }

  // Append the card details to the body and the body to the card
  cardBody.append(projectType, projectDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  // Return the fully built card
  return taskCard;
}

// ? Prints all the project data to the page.
function printProjectData() {
  const projects = readProjectsFromStorage();

  // Empty the project cards from all lanes
  const todoList = $('#todo-cards');
  todoList.empty();

  const inProgressList = $('#in-progress-cards');
  inProgressList.empty();

  const doneList = $('#done-cards');
  doneList.empty();

  // Loop through projects and create cards based on their status
  for (let project of projects) {
    const projectCard = createProjectCard(project);
    if (project.status === 'to-do') {
      todoList.append(projectCard);
    } else if (project.status === 'in-progress') {
      inProgressList.append(projectCard);
    } else if (project.status === 'done') {
      doneList.append(projectCard);
    }
  }

  // Make the cards draggable using jQuery UI
  $('.draggable').draggable({
    opacity: 0.7,
    zIndex: 100,
    containment: 'document',  // Contain drag within the document to prevent accidental dragging outside
    revert: "invalid",  // Revert to original position if not dropped in a valid drop zone
    helper: "clone",  // Clone the item visually when dragging instead of moving the original
    start: function (event, ui) {
      $(this).css('opacity', 0.5);  // Set opacity to make it visually clear which one is being dragged
    },
    stop: function (event, ui) {
      $(this).css('opacity', 1);  // Restore the opacity after dropping
    }
  });
}

// ? Deletes a project from local storage and updates the display
function handleDeleteProject(event) {
  const projectId = $(event.target).attr('data-project-id');  // Get the project ID from the button's `data-project-id`
  let projects = readProjectsFromStorage();                   // Read the current projects from localStorage

  // Filter out the project with the matching projectId
  projects = projects.filter(project => project.id !== projectId);

  // Save the updated list back to localStorage
  saveProjectsToStorage(projects);

  // Re-print the updated project list
  printProjectData();
}

// ? Handles form submission, saves new projects to localStorage, and updates the UI
function handleProjectFormSubmit(event) {
  event.preventDefault();

  // Get the project name, type, and due date from the form inputs
  const projectName = projectNameInputEl.val().trim();
  const projectType = projectTypeInputEl.val().trim();
  const projectDate = projectDateInputEl.val().trim();

  // Check if all form fields are filled
  if (!projectName || !projectType || !projectDate) {
    alert("Please fill in all the fields");
    return;
  }

  // Create a new project object
  const newProject = {
    id: crypto.randomUUID(),
    name: projectName,
    type: projectType,
    dueDate: projectDate,
    status: 'to-do',  // Default status for new projects
  };

  // Add the new project to the current list of projects
  const projects = readProjectsFromStorage();
  projects.push(newProject);

  // Save the updated project list to localStorage
  saveProjectsToStorage(projects);

  // Re-print the updated project list
  printProjectData();

  // Clear the form inputs
  projectNameInputEl.val('');
  projectTypeInputEl.val('');
  projectDateInputEl.val('');
}

// ? Handles the drop event when a project card is dropped into a different lane
function handleDrop(event, ui) {
  const projects = readProjectsFromStorage();  // Get current projects from localStorage
  const taskId = ui.draggable[0].dataset.projectId;  // Get the ID of the dragged project
  const newStatus = event.target.id;  // Get the ID of the drop zone (lane)

  // Find the project and update its status based on the drop zone
  for (let project of projects) {
    if (project.id === taskId) {
      project.status = newStatus;
    }
  }

  // Save the updated project data and refresh the display
  saveProjectsToStorage(projects);
  printProjectData();
}

// ? Add event listener for form submission and delete button clicks
projectFormEl.on('submit', handleProjectFormSubmit);

// Event listener for deleting tasks using event delegation
$(document).on('click', '.delete', handleDeleteProject);

// ? Call the `displayTime` function once on page load and then every second after that to display the current time.
displayTime();
setInterval(displayTime, 1000);

// ? When the document is ready, initialize the datepicker and print project data if available
$(document).ready(function () {
  printProjectData();

  // Initialize datepicker on the task due date input
  $('#taskDueDate').datepicker({
    changeMonth: true,
    changeYear: true,
  });

  // Make lanes droppable to allow project cards to be dropped into different lanes
  $('.lane').droppable({
    accept: '.draggable',
    drop: handleDrop,
  });
});