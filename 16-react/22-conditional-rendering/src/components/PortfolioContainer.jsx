import { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  // TODO: Add a comment describing the purpose of the state
  // The `currentPage` state keeps track of which page is currently active.
  // The `setCurrentPage` function allows updating the active page.

  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  // The `renderPage` method determines which page component to render
  // based on the value of `currentPage`. It returns the corresponding component.

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  // TODO: Add a comment describing this method
  // The `handlePageChange` method updates the `currentPage` state with the selected page.
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* The `currentPage` and `handlePageChange` values are passed as props to the `NavTabs` component. */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* The `renderPage` function is called to dynamically render the component for the current page. */}
      <main className="mx-3">{renderPage()}</main>
    </div>
  );
}