// This file defines a functional React component named CardBody.
// It represents a "child" component designed to display a counter
// and provide buttons to increment or decrement the count.

function CardBody(props) {
  return (
    <div className="card-body">
      {/* `count` (number): The current value of the counter, displayed here */}
      <p className="card-text">Click Count: {props.count}</p>

      {/* `handleIncrement` (function): Called when this button is clicked */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}

      {/* `handleDecrement` (function): Called when this button is clicked */}
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