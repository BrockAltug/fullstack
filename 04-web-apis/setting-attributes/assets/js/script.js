const site1El = document.querySelector('.site1');
const site2El = document.querySelector('.site2');
const site3El = document.querySelector('.site3');

site1El.children[0].textContent = 'Site 1';
site1El.children[1].setAttribute('href', 'https://google.com');
site1El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_1.jpg'
);
site1El.children[1].children[0].setAttribute('alt', 'man working');
site1El.children[1].children[0].setAttribute('style', 'padding:10px;');

site2El.children[0].textContent = 'Site 2';
site2El.children[1].setAttribute('href', 'https://twitter.com');
site2El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_2.jpg'
);
site2El.children[1].children[0].setAttribute('alt', 'group brainstorm');
site2El.children[1].children[0].setAttribute('style', 'padding:10px;');

site3El.children[0].textContent = 'Site 3';
site3El.children[1].setAttribute('href', 'https://instagram.com');
site3El.children[1].children[0].setAttribute(
  'src',
  'assets/images/image_3.jpg'
);
site3El.children[1].children[0].setAttribute('alt', 'women working');
site3El.children[1].children[0].setAttribute('style', 'padding:10px;');

// Write Your Code Below

//all the <h4> elements are selected and stored in a single variable
const h4El = document.querySelectorAll('h4'); //all <h4> elements stored in h4El variable using querySelectorAll from the document object

//It's done when the text of each <h4> is set to blue and the font size is 30px and the padding-left is 10px and the margin is 0px
h4El.forEach((element) => { //forEach loop is used to iterate over each <h4> element in the h4El variable
  element.style.color = 'blue'; //each <h4> can be accessed using the element parameter 
  element.style.fontSize = '30px';
  element.style.paddingLeft = '10px';
  element.style.margin = '0px';
});
