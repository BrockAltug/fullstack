// Access element using id
const articlesDiv = document.getElementById('articles');
const headerDiv = document.getElementById('header');

// Change style by accessing style object's properties

// Change the font size of the first article
articlesDiv.children[0].style.fontSize = '50px'; // changed from children[2] to children[0] to access the first article

// Change the color of the first header
headerDiv.children[0].style.color = 'white'; // added children[0] to access the first header
