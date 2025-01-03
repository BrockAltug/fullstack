import '../styles/Navbar.css';

// TODO: Create a styles object called "styles"
const styles = {
  nav: {
    backgroundColor: '#333',   // Changed background color to dark gray
    padding: '10px',           // Added padding for spacing
  },
  link: {
    color: '#fff',             // Changed link text color to white
    textDecoration: 'none',    // Removed underline from link
    fontSize: '1.2rem',        // Increased font size for better readability
  },
};

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav className="navbar" style={styles.nav}>
      <a href="/" style={styles.link}>
        Welcome
      </a>
    </nav>
  );
}

export default Navbar;