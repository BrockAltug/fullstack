// TODO: Create a `name` variable
// Declaring a variable to store my name
const name = "John Doe";

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
// Declaring a variable to store my thoughts about React
const thoughts = "is an amazing library for building user interfaces.";

function JSXVariables() {
  // Calculating the length of the name to use in JSX
  const nameLength = name.length;

  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          {/* Displaying the name variable dynamically */}
          <h1>Hi! My name is {name}</h1>

          {/* TODO: Add your number of letters variable */}
          {/* Dynamically displaying the length of the name variable */}
          <h2>My name has {nameLength} letters</h2>

          {/* TODO: Add your thoughts variable */}
          {/* Dynamically displaying the thoughts variable */}
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;