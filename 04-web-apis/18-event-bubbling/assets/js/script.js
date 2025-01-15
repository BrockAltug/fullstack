// TODO: which element is the following line of code selecting?
const carousel = document.querySelector('.carouselbox'); 
// this line is selecting the element with the class 'carouselbox' from the document

// TODO: which element is the following line of code selecting?
const next = carousel.querySelector('.next'); 
// this line is selecting the element with the class 'next' that is a descendant of the 'carouselbox' element

const prev = carousel.querySelector('.prev'); 
// this line is selecting the element with the class 'prev' that is a descendant of the 'carouselbox' element

let index = 0;
let currentImage;

const images = [
  'https://picsum.photos/id/10/300/200',
  'https://picsum.photos/id/20/300/201',
  'https://picsum.photos/id/30/300/202',
  'https://picsum.photos/id/47/300/203',
];

carousel.style.backgroundImage = "url('https://picsum.photos/id/10/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = `url('${currentImage}')`;
}

// TODO: describe the functionality of the following event listener.
carousel.addEventListener('click', function () {
  window.location.href = images[index];
});
// this event listener redirects the user to the url of the current image when the carouselbox is clicked

// TODO: describe the functionality of the following event listener.
next.addEventListener('click', function (event) {
  // TODO: what is the purpose of the following line of code?
  event.stopPropagation();
  // this line prevents the click event from bubbling up to the parent elements, such as the carouselbox

  navigate(1);
});
// this event listener moves to the next image in the carousel when the 'next' element is clicked

// TODO: describe the functionality of the following event listener.
prev.addEventListener('click', function (event) {
  // TODO: what would happen if we didn't add the following line of code?
  event.stopPropagation();
  // if we didn't add this line, the click event would propagate to the carouselbox and trigger its event listener, causing an unintended redirect

  navigate(-1);
});
// this event listener moves to the previous image in the carousel when the 'prev' element is clicked

navigate(0);