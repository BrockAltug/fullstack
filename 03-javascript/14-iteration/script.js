// WRITE YOUR CODE BELOW

// names of five classmates are stored in a array named `students`
let students = ["Alice", "Bob", "Charlie", "David", "Eve"];

// total number of elements in the `students` array is logged to the console
console.log(`There are ${students.length} students in the class.`);

// using a `for` loop, the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the `students` array
for (let i = 0; i < students.length; i++) {
  console.log(`Great to see you, ${students[i]}!`);
}

// using a `for-of` loop, the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the `students` array.
for (let student of students) {
  console.log(`Nice to see you, ${student}!`);
}