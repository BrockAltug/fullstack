import { useState, useEffect } from 'react';
import Container from './UI/Container';
import Row from './UI/Row';
import Col from './UI/Col';
import Card from './UI/Card';
import SearchForm from './SearchForm';
import MovieDetail from './MovieDetail';
import API from '../utils/API';

const OmdbContainer = () => {
  const [result, setResult] = useState({});
  const [search, setSearch] = useState('');

  // When the search form is submitted, use the API.search method to search for the movie(s)
  const searchMovie = (query) => {
    API.search(query)
      .then((res) => {
        setResult(res.data);
        setSearch('');
      })
      .catch((err) => console.log(err));
  };

  // Use useEffect to perform the initial search for "The Matrix"
  useEffect(() => {
    searchMovie('The Matrix');
  }, []); // Add an empty dependency array to run only once on mount

  // Update the `search` state as the user types into the input field
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // Trigger the search functionality when the form is submitted
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      searchMovie(search);
    }
  };

  // Destructure the result object to make the code more readable, assign them to empty strings to start
  const {
    Title = '',
    Poster = '',
    Director = '',
    Genre = '',
    Released = '',
  } = result;

  /* Fall back to default header if `Title` is undefined
  Does `Title` exist? If so, render the `MovieDetail` card 
  If not, render a different header */

  return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card heading={Title || 'Search for a Movie to Begin'}>
            {Title ? (
              <MovieDetail
                title={Title}
                src={Poster}
                director={Director}
                genre={Genre}
                released={Released}
              />
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">
            <SearchForm
              value={search}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OmdbContainer;