import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// The `export default` statement allows this `Counter` component to be imported in other files without curly braces.
// It designates this function as the default export for this module.

export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // The `useState` hook is a React hook that provides state management for functional components.
  // It initializes a state variable `count` with a default value of 0 and provides a setter function `setCount` to update its value.

  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // `handleIncrement` is a function that updates the `count` state by increasing its value by 1.
  // The `setCount` function is used to update the state and trigger a re-render of the component.
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // `handleDecrement` is a function that decreases the `count` state by 1, but only if the current count is greater than 0.
  // This ensures that the counter does not go below zero.
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      {/* Header section of the card */}
      <div className="card-header bg-primary text-white">Click Counter!</div>

      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* The `CardBody` component is rendered here, and it receives the following props:
          - `count`: The current value of the counter.
          - `handleIncrement`: The function to increment the counter.
          - `handleDecrement`: The function to decrement the counter.
       */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}