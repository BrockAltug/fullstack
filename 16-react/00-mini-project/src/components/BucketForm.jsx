import { useState } from 'react';

function BucketForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [eagerness, setEagerness] = useState(props.edit ? props.edit.eagerness : '');

  // Array to represent different eagerness levels
  const eagernessLevel = ['high', 'medium', 'low'];

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if input is empty
    if (!input.trim()) {
      alert('Please enter a valid bucket list item.');
      return;
    }

    // Default eagerness level if none is selected
    const selectedEagerness = eagerness || 'low';

    // Passes form data to the parent component
    props.onSubmit({
      id: Math.floor(Math.random() * 1000), // Generates a unique ID for the item
      text: input.trim(), // Trim the input to remove extra whitespace
      eagerness: selectedEagerness, // Selected eagerness level
    });

    // Resets the form fields after submission
    setInput('');
    setEagerness('');
  };

  // Handles changes to the text input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return !props.edit ? (
    // Render the "Add" form when not in edit mode
    <div>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your bucket list"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        />
        <div className="dropdown">
          <button type="button" className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level) => (
              <p key={level} onClick={() => setEagerness(level)}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Add bucket list item</button>
      </form>
    </div>
  ) : (
    // Render the "Edit" form when in edit mode
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="bucket-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Update your bucket list item"
          value={input}
          name="text"
          className="bucket-input"
          onChange={handleChange}
        />
        <div className="dropdown">
          <button type="button" className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {eagernessLevel.map((level) => (
              <p key={level} onClick={() => setEagerness(level)}>
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </p>
            ))}
          </div>
        </div>
        <button className="bucket-button">Update</button>
      </form>
    </div>
  );
}

export default BucketForm;