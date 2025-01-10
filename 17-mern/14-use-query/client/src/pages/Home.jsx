// Import the `useQuery` hook from Apollo Client to perform GraphQL queries
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';

// Import the `QUERY_THOUGHTS` query to fetch thoughts data
import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // Use the `useQuery` hook to execute the `QUERY_THOUGHTS` query and retrieve `loading` and `data` properties
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // Extract the `thoughts` array from the query response, defaulting to an empty array if no data is returned
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {/* Show a loading message while the query is in progress */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            // Pass the retrieved `thoughts` data to the `ThoughtList` component for rendering
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;