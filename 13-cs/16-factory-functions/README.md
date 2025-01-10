# CS Factory Functions

## Concepts Covered

1. **Factory Functions**:

   - A factory function is a function that returns a new object.
   - Unlike classes, factory functions allow greater flexibility and can encapsulate private data and methods.

2. **Encapsulation**:

   - Encapsulates student information (name and grade year) in a private object, making it accessible only through inner functions.

3. **Method Chaining**:

   - Demonstrates how methods (like `greet`) can be returned and used on the resulting object.

4. **Scope and Closures**:
   - Leverages closures to ensure that the inner function (`greet`) has access to the outer function's variables (`studentInfo`).

---

## Code Overview

### Factory Function: `student`

```javascript
function student(name, gradeYear) {
  // Store the function's arguments as an object named `studentInfo`.
  let studentInfo = {
    name: name,
    gradeYear: gradeYear,
  };

  return {
    // Return an inner function which has access to the outer function's scope.
    greet: function () {
      console.log(
        // Access the students name and grade year using dot notation.
        \`My name is \${studentInfo.name} and I am in \${studentInfo.gradeYear} grade\`
      );
    },
  };
}

// Create a new student passing a name and grade year as arguments.
const newStudent = student('Dominique', '11th');

// Call the `greet` function on the newly created student.
newStudent.greet();
```

---

## Key Points

1. **Factory Function Usage**:

   - Creates objects with specific methods and encapsulated data.

2. **Encapsulation**:

   - Protects `studentInfo` from external modification.

3. **Closure**:

   - Ensures the `greet` method retains access to `studentInfo` after `student` has executed.

4. **Example Output**:
   - If the factory function is used as shown in the example:
     ```
     My name is Dominique and I am in 11th grade
     ```

---

## Usage Instructions

1. **Create a Student**:

   - Call the `student` factory function with a `name` and `gradeYear`.

   Example:

   ```javascript
   const newStudent = student("John", "10th");
   ```

2. **Call `greet` Method**:

   - Invoke the `greet` method on the returned object to display the student's information.

   Example:

   ```javascript
   newStudent.greet();
   ```

3. **Testing**:
   - Ensure the factory function and its methods work as expected by writing tests.

---

## Testing

### Test Suite

```javascript
const student = require("../index");

test("student factory function is defined", () => {
  expect(typeof student).toEqual("function");
});

test("greet method returns the correct output", () => {
  const testStudent = student("Alice", "12th");
  console.log = jest.fn();
  testStudent.greet();
  expect(console.log).toHaveBeenCalledWith(
    "My name is Alice and I am in 12th grade"
  );
});
```

### Expected Test Results

- The test suite ensures the factory function creates objects correctly and the `greet` method outputs the expected result.
