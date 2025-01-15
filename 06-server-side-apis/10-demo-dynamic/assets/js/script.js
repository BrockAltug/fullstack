const userContainer = document.getElementById('users');
const fetchButton = document.getElementById('fetch-button');

function getApi() {
  const requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (let i = 0; i < data.length; i++) {
        const userName = document.createElement('h3'); // Create a new h3 element to hold the user name
        const userUrl = document.createElement('p'); // Create a new p element to hold the user URL
        userName.textContent = data[i].login; // Set the text content of the h3 element to the user's name
        userUrl.textContent = data[i].html_url; // Set the text content of the p element to the user's URL
        userContainer.appendChild(userName); // Append the h3 element to the userContainer
        userContainer.appendChild(userUrl); // Append the p element to the userContainer
      }
    });
}
fetchButton.addEventListener('click', getApi);
