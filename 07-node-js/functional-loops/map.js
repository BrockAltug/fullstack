const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). 
// map() will use an anonymous function to multiply each number by 2 and return the new array.
const doubledArray = originalArray.map(data => data * 2);

console.log(doubledArray); // Logs: [2, 6, 4, 10, 20]
console.log(originalArray); // Logs: [1, 3, 2, 5, 10]

// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// map() creates a new array where each number in originalArray is multiplied by 3.
const tripledArray = originalArray.map(data => data * 3);

console.log(tripledArray); // Logs: [3, 9, 6, 15, 30]

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// map() creates a new array that categorizes each number as either 'odd' or 'even'.
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(oddOrEven); // Logs: ['odd', 'odd', 'even', 'odd', 'even']