import { useState } from 'react';
import CardBody from './CardBody';

// The `export default` statement allows this `Counter` component to be imported in other files without curly braces.
// It designates this function as the default export for this module.
export default function Counter() {
  // The `useState` hook initializes a state variable `count` with a default value of 0
  // and provides a setter function `setCount` to update its value.
  const [count, setCount] = useState(0);

  // `handleIncrement` updates the `count` state by increasing its value by 1.
  // The `setCount` function triggers a re-render of the component when called.
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // `handleDecrement` decreases the `count` state by 1 if the current count is greater than 0.
  // This ensures that the counter does not go below zero.
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="card text-center">
      {/* Header section of the card */}
      <div className="card-header bg-primary text-white">Click Counter!</div>

      {/* The `CardBody` component is rendered here with props:
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