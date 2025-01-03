# JSX Expressions Demo

This project demonstrates how to use JSX expressions to dynamically render variables in a React component.

## Description

The `JSXVariables` component showcases the use of JavaScript variables to dynamically generate content in a React application. By leveraging JSX, we can embed variables and expressions directly into the UI, creating dynamic and interactive interfaces.

## Features

- **Dynamic Variables**: Use JavaScript variables to render content dynamically.
- **JSX Integration**: Embed variables and expressions seamlessly into the JSX.
- **Real-Time Updates**: Modify the variables to see the rendered output change.

## Implementation

The component utilizes three main variables:

1. **`name`**: Holds a string representing the user's name.
2. **`thoughts`**: Contains a string representing the user's thoughts about React.
3. **`nameLength`**: Dynamically calculates the number of letters in the `name` variable.

### Code Example

```jsx
// Declaring variables for dynamic rendering
const name = "John Doe";
const thoughts = "is an amazing library for building user interfaces.";

function JSXVariables() {
  const nameLength = name.length;

  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {nameLength} letters</h2>
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
```

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js installed on your machine.
- Basic understanding of React.

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Modify the `name` and `thoughts` variables in the `JSXVariables` component to see how the UI updates dynamically.
- Experiment with other JavaScript expressions in JSX to explore its full potential.
