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
    console.log(`My speed is at ${speed}, time to ${sound}`);
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