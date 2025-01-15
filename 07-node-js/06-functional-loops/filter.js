const originalArray = [1, 3, 2, 5, 10];

// evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const evenNumbers = originalArray.filter(data => {
  // The anonymous function uses a conditional to check if a number is divisible by 2. 
  if (data % 2 === 0) {
    // If a number is even (divisible by 2), the condition returns true.
    return true;
  }
  // Otherwise, the condition returns false, and the number is excluded from the new array.
});

console.log(evenNumbers); // Logs: [2, 10]
console.log(originalArray); // Logs: [1, 3, 2, 5, 10]

const isPrime = num => {
  // Set up a loop that starts with 2 and continues to increment i as long as i is less than num.
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return true, unless num equals 1.
  return num !== 1;
};

// TODO: Describe how filter is working in this example. What will the value of primeArray be? 
// filter() creates a new array containing only the numbers from originalArray that are prime.
const primeArray = originalArray.filter(isPrime);

console.log(primeArray); // Logs: [3, 2, 5]

// TODO: Describe how filter is working in this example. What will the value of moreThan5Array be? 
// filter() creates a new array containing numbers greater than 5 from the original array.
const moreThan5Array = originalArray.filter(num => num > 5);

console.log(moreThan5Array); // Logs: [10]