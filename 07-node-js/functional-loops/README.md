# map.js and filter.js

This project demonstrates the use of JavaScript’s array methods `map()` and `filter()` to transform and filter elements in arrays. Each section is dedicated to explaining the specific method used (`map()` or `filter()`), the operations performed on the array, and the learning objectives associated with each method.

---

## Section 1: map.js

### Concepts Covered

- **Array `map()` Method**: Using the `map()` function to transform elements in an array and return a new array.
- **Anonymous Functions**: Creating inline functions for transforming data without defining separate named functions.
- **Conditionals within `map()`**: Using conditionals (e.g., `if` statements) inside `map()` to transform array values based on specific criteria.

### Learning Objectives

- Understand how to use the `map()` method to create a new array by transforming values from an original array.
- Learn how to implement anonymous functions within `map()` for more concise code.
- Practice using conditionals inside `map()` to categorize values based on a condition (like determining whether a number is odd or even).

### Features

- **Double the Values**: Creates a new array with values doubled from the original array.
- **Triple the Values**: Creates a new array with values tripled from the original array.
- **Odd or Even Categorization**: Creates a new array where each value is labeled either "odd" or "even" based on its divisibility by 2.

### Summary

This script demonstrates how to use the `map()` method to transform values in an array and return a new array. It includes examples of doubling and tripling numeric values, as well as using conditionals inside `map()` to determine whether numbers are odd or even. The original array remains unchanged, and new arrays are logged to the console to showcase the transformations.

---

## Section 2: filter.js

### Concepts Covered

- **Array `filter()` Method**: Using the `filter()` function to return a new array with elements that meet a specific condition.
- **Anonymous Functions**: Creating inline anonymous functions as conditions within the `filter()` method.
- **Prime Number Filtering**: Implementing logic to determine whether a number is prime and filtering the array based on this condition.
- **Conditional Filtering**: Filtering arrays based on different conditions, such as finding even numbers or numbers greater than 5.

### Learning Objectives

- Understand how to use the `filter()` method to extract elements from an array based on specific conditions.
- Learn how to use anonymous functions to define conditions for filtering arrays.
- Practice implementing custom conditions, such as determining prime numbers or filtering numbers greater than a specified value.

### Features

- **Filter Even Numbers**: Creates a new array containing only the even numbers from the original array.
- **Filter Prime Numbers**: Filters out non-prime numbers from the array to create a new array of primes.
- **Filter Numbers Greater than 5**: Filters numbers greater than 5 and stores them in a new array.

### Summary

This script demonstrates the use of the `filter()` method to extract values from an array based on specific conditions. Examples include filtering for even numbers, identifying prime numbers, and filtering values greater than 5. The code highlights how conditions are passed into `filter()` as anonymous functions and how the method can be used to create new arrays with values that meet the specified criteria.

---

## Conclusion

Both the `map()` and `filter()` array methods provide powerful ways to manipulate and transform arrays in JavaScript. While `map()` is focused on transforming each element in the array and returning a new array, `filter()` extracts elements based on a condition. Together, these methods are essential tools in modern JavaScript programming, enabling concise and effective data processing.
