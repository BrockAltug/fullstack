import { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  // State to hold the list of bucket items
  const [bucket, setBucket] = useState([]);

  // Function to add a bucket list item
  const addBucketItem = (item) => {
    // Add the new item to the beginning of the bucket array
    const newBucket = [item, ...bucket];
    setBucket(newBucket);
  };

  // Function to mark a bucket list item as complete or incomplete
  const completeBucketItem = (id) => {
    const updatedBucket = bucket.map((item) => {
      // Toggle the `isComplete` status of the matching item
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      }
      return item;
    });

    setBucket(updatedBucket); // Update the bucket state with the modified list
  };

  // Function to remove a bucket list item
  const removeBucketItem = (id) => {
    // Filter out the item with the matching ID
    const updatedBucket = bucket.filter((item) => item.id !== id);
    setBucket(updatedBucket); // Update the bucket state with the filtered list
  };

  // Function to edit a bucket list item
  const editBucketItem = (itemId, newValue) => {
    if (!newValue.text) {
      return; // Exit if the new value is empty
    }

    // Map through the bucket list and update the matching item with the new value
    setBucket((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your bucket list?</h1>
      {/* Form to add new bucket list items */}
      <BucketForm onSubmit={addBucketItem} />
      {/* Display the bucket list items */}
      <Bucket
        bucket={bucket}
        completeBucketItem={completeBucketItem}
        removeBucketItem={removeBucketItem}
        editBucketItem={editBucketItem}
      />
    </div>
  );
}

export default BucketList;