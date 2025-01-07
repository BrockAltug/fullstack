// TODO: Add a comment explaining how we are able to extract the key-value pairs from props
// By using destructuring in the function parameters, we can directly extract the `currentPage` and `handlePageChange` properties from the `props` object.

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // This is a ternary operator. It checks if `currentPage` is equal to 'Home'. 
          // If true, it applies the class `nav-link active`; otherwise, it applies `nav-link`.

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // TODO: Add a comment explaining what this logic is doing
          // This logic checks if the current page is 'About'.
          // If so, it applies the `nav-link active` class to visually indicate the active page.
          // Otherwise, it applies the `nav-link` class.

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          // TODO: Add a comment explaining what this logic is doing
          // This logic works similarly to the previous one, but it checks if the current page is 'Blog'. 
          // It updates the class of the link to reflect the active state.

          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          // TODO: Add a comment explaining what this logic is doing
          // This logic checks if the current page is 'Contact' and dynamically applies the appropriate class.
          // If the page is active, it applies the `nav-link active` class; otherwise, it applies `nav-link`.

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;