# CS Global Execution Context

## Concepts Covered

1. **Global Scope**:

   - Variables and functions declared outside of any function are stored in the global scope.

2. **Local Scope**:

   - Variables and functions declared inside a function are stored in the local scope of that function.

3. **Global Execution Context**:

   - When the script is executed, a global execution context is created. It contains the global scope and any functions declared in it.

4. **Function Execution Context**:

   - Each time a function is invoked, a new execution context is created for it. It includes:
     - Local variables and functions.
     - The value of the function's arguments.

5. **Execution Order**:
   - The script executes sequentially unless a function call occurs, which creates a new execution context.

## Script Breakdown

### Code Overview

```javascript
// 1) Where is carNoise stored?
// carNoise is stored as a constant variable in the global scope.
const carNoise = 'Honk';

// 2) Where is goFast stored?
// goFast is stored as a constant variable in the global scope. It is a function that accepts a parameter `speed`.
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // speed is assigned a value when goFast is called. The value of speed is passed as an argument to the function
  // and is stored in the local execution context of the function during the call.

  // 5) Where is makeNoise stored?
  // makeNoise is stored as a constant variable in the local scope of the goFast function.
  const makeNoise = sound => {
    console.log(\`My speed is at \${speed}, time to \${sound}\`);
  }

  // 6) What happens in the following statement?
  // The makeNoise function is called with the argument `carNoise`, which is 'Honk'.
  // The `console.log` inside makeNoise will output the message interpolating the `speed` and `sound` values.
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// The `confirm` function displays a dialog box asking the user if they want to go fast.
// If the user clicks "OK" (true), the goFast function is called with an argument of 80.
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
```

### Key Points

1. **Variable Storage**:

   - `carNoise` is stored in the global execution context.
   - `goFast` is a function stored in the global execution context.
   - `speed` is stored in the local execution context of `goFast` during its execution.
   - `makeNoise` is stored in the local execution context of `goFast`.

2. **Execution Contexts**:

   - **Global Execution Context**: Created when the script starts execution and contains `carNoise` and `goFast`.
   - **Local Execution Context for goFast**: Created when `goFast` is called, storing `speed` and `makeNoise`.

3. **Interactive Behavior**:

   - The `confirm` function prompts the user to interact.
   - If the user confirms, the script dynamically creates a new execution context for `goFast`.

4. **Code Execution Order**:
   - The script runs sequentially in the global context.
   - When `goFast` is invoked, it creates a nested execution context for its local variables and execution.

## Usage

1. **User Interaction**:

   - The script uses a `confirm` dialog to ask if the user wants to "go fast."
   - Clicking "OK" triggers the `goFast` function with a speed of 80.

2. **Console Output**:

   - Outputs a message interpolating the speed and car noise when the `makeNoise` function is invoked within `goFast`.

3. **Learning Objective**:
   - Understand how JavaScript execution contexts handle global and local variables, as well as function calls.
