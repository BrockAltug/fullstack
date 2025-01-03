import '../styles/Header.css';

// TODO: Create a styles object called "styles"
const styles = {
  header: {
    backgroundColor: '#4CAF50', // Changed background color to green
    padding: '20px',           // Added padding for spacing
    textAlign: 'center',       // Added text alignment to center
  },
  h1: {
    color: '#fff',             // Changed text color to white
    fontSize: '2.5rem',        // Increased font size for better visibility
  },
};

function Header() {
  // TODO: Add a style attribute to header and the h1 element
  return (
    <header className="header" style={styles.header}>
      <h1 style={styles.h1}>Welcome</h1>
    </header>
  );
}

export default Header;