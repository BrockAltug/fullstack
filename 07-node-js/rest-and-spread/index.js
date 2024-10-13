// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// The spread operator `...` is being used here. It creates a shallow copy of the 'songs' array into 'newSongs'.
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// The content of the 'newSongs' array, which is a copy of the 'songs' array, will be logged: 
// ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got']
console.log(newSongs);


// Exercise 2
const addition = (x, y, z) => {
  // The array is created using the arguments 'x', 'y', and 'z'.
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // The `reduce()` method applies a function to accumulate all values in the array.
  // In this case, it sums the values of the array starting from an initial value of 0.
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
// It will log the sum of 1, 2, and 3, which is 6.
console.log(addition(1, 2, 3));


// TODO: What is this syntax that is being used as the parameter?
// The rest parameter syntax (`...array`) is used to accept an indefinite number of arguments as an array.
const additionSpread = (...array) => 
  // The `reduce()` method sums all elements in the array.
  array.reduce((a, b) => a + b, 0);

// TODO: What do you expect to be logged in the console?
// It will log the sum of 1, 2, and 3, which is 6.
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
// It will log the sum of 1, 2, 3, 4, and 100, which is 110.
console.log(additionSpread(1, 2, 3, 4, 100));