import { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket({ bucket, completeBucketItem, removeBucketItem, editBucketItem }) {
  // State to track if the user is editing a bucket item
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  // Function to handle submitting the updated bucket item
  const submitUpdate = (value) => {
    // Call the editBucketItem prop to update the item with new values
    editBucketItem(edit.id, value);

    // Reset the edit state back to empty after updating
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

  // If the user is editing an item, render the BucketForm component with the edit values
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  // Render the list of bucket items
  return bucket.map((item, index) => (
    <div
      // Apply dynamic class names based on the item's completion status and eagerness level
      className={`bucket-row ${item.isComplete ? 'complete' : ''} ${item.eagerness}`}
      key={index}
    >
      <div
        // Handle marking the item as complete or incomplete
        onClick={() => completeBucketItem(item.id)}
        key={item.id}
      >
        {/* Display the bucket item text */}
        {item.text}
      </div>
      <div className="icons">
        {/* Edit icon: set the edit state with the item's id, value, and eagerness */}
        <p
          onClick={() =>
            setEdit({ id: item.id, value: item.text, eagerness: item.eagerness })
          }
        >
          ✏️
        </p>
        {/* Delete icon: call the removeBucketItem prop with the item's id */}
        <p onClick={() => removeBucketItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Bucket;