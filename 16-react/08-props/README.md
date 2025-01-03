# React Props: Dynamic Card Component

## Overview

This project demonstrates how to use React props to pass data between components. A `Card` component dynamically displays information about a feline, including its name, description, and ID. The `Display` component acts as the parent and passes these props to the `Card` component.

---

## Key Features

1. **Dynamic Data Rendering**:
   - The `Card` component uses props to display dynamic data passed from the parent component.

2. **Reusable Components**:
   - The `Card` component can be reused for any data structure containing a `name`, `description`, and `id`.

3. **Props Handling**:
   - Props are destructured in the `Card` component for clean and readable code.

4. **Randomized Images**:
   - A helper function generates random placeholder image sizes for variety.

5. **Bootstrap Integration**:
   - Uses Bootstrap for styling the card layout.

---

## Application Code

### Card Component (`components/Card.jsx`)

```javascript
export default function Card({ name, description, id }) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placekitten.com/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Description: {description}</p>
          <p className="card-text">ID: {id}</p>
          <a href="#" className="btn btn-primary">
            Adopt {name}
          </a>
        </div>
      </div>
    </div>
  );
}
```

### Display Component (`components/Display.jsx`)

```javascript
import Card from './Card';

const feline = {
  name: 'Fluffykins',
  description: 'A cat that acts like a dog',
  id: 1,
};

export default function Display() {
  return (
    <div>
      {/* Render the Card component and pass the feline data as props */}
      <Card 
        name={feline.name} 
        description={feline.description} 
        id={feline.id} 
      />
    </div>
  );
}
```

---

## Setup Instructions

1. **Install Dependencies**:
   - Run `npm install` to install the required dependencies, including React and Bootstrap.

2. **Run the Application**:
   - Start the application using:
     ```bash
     npm start
     ```

3. **View the Application**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the dynamically rendered card.

---

## Expected Behavior

1. The application renders a Bootstrap card displaying:
   - The feline's name.
   - A description.
   - Its ID.
   - A random placeholder image.
2. The "Adopt [Name]" button dynamically reflects the feline's name.

---

## Summary

This project highlights the use of props in React for passing data between components. It showcases best practices for reusable components, props destructuring, and integrating Bootstrap for styling.
