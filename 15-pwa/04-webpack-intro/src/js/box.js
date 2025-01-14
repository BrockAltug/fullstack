// TODO: The `export` keyword allows this function to be imported and used in other files.
//       In this case, it is used to handle the click event for changing the box's color.

export const boxClick = () => {
  const box = document.getElementById('box');
  if (box.style.backgroundColor === 'blue') {
    box.style.backgroundColor = 'yellow';
  } else {
    box.style.backgroundColor = 'blue';
  }
};