// This file defines a functional React component named CardBody.
// It represents a "child" component that is designed to display a counter and provide buttons to increment or decrement the count.
// The component receives its data and event handlers as "props" from its parent component.

// TODO: Add a comment explaining what is being passed to this "child" component as props
// Props passed to this component include:
// 1. `count` (number): The current value of the counter, which is displayed in the paragraph element.
// 2. `handleIncrement` (function): A function to increment the counter when the "Increment" button is clicked.
// 3. `handleDecrement` (function): A function to decrement the counter when the "Decrement" button is clicked.

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

// Export the CardBody component so it can be imported and used in other parts of the application.
export default CardBody;