import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_THOUGHT } from '../../utils/mutations';
import { QUERY_THOUGHTS } from '../../utils/queries';

const ThoughtForm = () => {
  // State to manage form data input by the user
  const [formState, setFormState] = useState({
    thoughtText: '', // Stores the main content of the thought
    thoughtAuthor: '', // Stores the name of the author
  });

  // State to manage the character count for the thought text
  const [characterCount, setCharacterCount] = useState(0);

  // Setting up the mutation hook to execute the ADD_THOUGHT mutation
  // refetchQueries ensures that after the mutation is complete, 
  // the specified queries (QUERY_THOUGHTS) are re-fetched to update the UI with the new data
  // `error` will contain any error information if the mutation fails
  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    refetchQueries: [
      QUERY_THOUGHTS, // This query will re-run to fetch the updated list of thoughts
      'getThoughts',  // Alias name for the query to ensure it matches the cache
    ],
  });

  // Handles form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Perform the mutation and pass in the form data as variables
      const { data } = await addThought({
        variables: { ...formState }, // Spread operator ensures all form fields are passed
      });

      // Reset the form and character count after successful submission
      // No need to reload the page because Apollo Client automatically manages the cache
      // and updates the UI with the latest data after the mutation is completed
      setCharacterCount(0);
      setFormState({
        thoughtText: '', // Clear the thought text field
        thoughtAuthor: '', // Clear the author name field
      });
    } catch (err) {
      console.error(err); // Log any errors encountered during the mutation
    }
  };

  // Handles changes to form fields
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the state based on the input field being edited
    if (name === 'thoughtText' && value.length <= 280) {
      // Ensure the thought text does not exceed 280 characters
      setFormState({ ...formState, [name]: value }); // Update the specific field
      setCharacterCount(value.length); // Update character count
    } else if (name !== 'thoughtText') {
      // Update other fields (e.g., thoughtAuthor) without character limit checks
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>What's on your techy mind?</h3>

      {/* Display character count and error message if applicable */}
      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>

      {/* Form for adding a new thought */}
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit} // Trigger the mutation on form submission
      >
        <div className="col-12">
          <textarea
            name="thoughtText" // Field for the thought content
            placeholder="Here's a new thought..."
            value={formState.thoughtText} // Controlled input bound to formState
            className="form-input w-100"
            onChange={handleChange} // Update state on text input
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="thoughtAuthor" // Field for the author's name
            placeholder="Add your name to get credit for the thought..."
            value={formState.thoughtAuthor} // Controlled input bound to formState
            className="form-input w-100"
            onChange={handleChange} // Update state on text input
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Thought
          </button>
        </div>

        {/* Display error message if mutation fails */}
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ThoughtForm;