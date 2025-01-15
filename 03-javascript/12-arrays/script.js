// WRITE YOUR CODE HERE

// creates an array called `names` that contains 5 individual string values
const names = ["John", "Jane", "James", "Judy", "Jack"];

// logs the total number of items in the `names` array to the console using .length
console.log(`There are ${names.length} students in the class`);

// logs the first value in the `names` array to the console
console.log(`Welcome to the class ${names[0]}`);

// first element in the array is replaced with the name of a new student
names[0] = "Jake";

// `if` statement confirms that the first element in the array has been replaced, the message "REPLACED_NAME is in class" is logged
if (names[0] === "Jake") {
  console.log(`${names[0]} is now in class`);
}


const arr = [1, 2, 3, 4, 5];

// access the last element of the array
const lastElement = arr[arr.length - 1];

// log the last element of the array
console.log(lastElement); // Output: 5
