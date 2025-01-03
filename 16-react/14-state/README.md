# React Counter Components: Click Counter

## Overview

This project demonstrates how to use React functional components and state management to build a simple counter application. The counter can be incremented or decremented using buttons, and the current count is displayed dynamically.

---

## Key Features

1. **Reusable Child Component**:
   - The `CardBody` component displays the counter and includes buttons to modify its value.

2. **State Management**:
   - The `useState` hook is used to manage the state of the counter.

3. **Event Handlers**:
   - Functions are passed as props to handle incrementing and decrementing the counter.

4. **Bootstrap Integration**:
   - Uses Bootstrap for styling the card layout and buttons.

---

## Application Code

### CardBody Component (`components/CardBody.jsx`)

```javascript
function CardBody(props) {
  return (
    <div className="card-body">
      {/* Display the current count */}
      <p className="card-text">Click Count: {props.count}</p>

      {/* Button to increment the count */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}

      {/* Button to decrement the count */}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;
```

### Counter Component (`components/Counter.jsx`)

```javascript
import { useState } from 'react';
import CardBody from './CardBody';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((count + 1));
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
```

---

## Setup Instructions

1. **Install Dependencies**:
   - Run `npm install` to install the required dependencies, including React and Bootstrap.

2. **Run the Application**:
   - Start the application using:
     ```bash
     npm start
     ```

3. **View the Application**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the counter.

---

## Expected Behavior

1. The counter starts at `0`.
2. Clicking the **Increment** button increases the counter by `1`.
3. Clicking the **Decrement** button decreases the counter by `1` but does not go below `0`.
4. The counter value dynamically updates in real-time.

---

## Summary

This project demonstrates best practices for passing props and managing state in React functional components. It highlights the use of child components, event handlers, and the `useState` hook to build an interactive and reusable counter application.
