# React Components: Grocery List

## Overview

This project demonstrates the creation and usage of React functional components to render a dynamic list of grocery items. It includes a `List` component that displays a list of groceries passed as props.

---

## Key Features

1. **Reusable Components**:
   - The `List` component renders a list of items dynamically using React props.
   
2. **Props Handling**:
   - Groceries data is passed to the `List` component as props.

3. **Dynamic Rendering**:
   - The `List` component maps through an array of grocery items and generates a list using React's `key` attribute.

4. **Bootstrap Integration**:
   - Includes Bootstrap for styling.

---

## Application Code

### List Component (`components/List.jsx`)

```javascript
function List(props) {
  return (
    <ul className="list-group">
      {props.groceries.map((item) => {
        return (
          // the key attribute is required by React to keep track of each item in the list
          <li key={item.id}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}

export default List;
```

### App Component (`App.jsx`)

```javascript
import List from "./components/List";

const groceries = [
  {
    id: 1,
    name: "Milk",
    purchased: true
  },
  {
    id: 2,
    name: "Eggs",
    purchased: true
  },
  {
    id: 3,
    name: "Cheese",
    purchased: false
  },
  {
    id: 4,
    name: "Cake Mix",
    purchased: false
  },
  {
    id: 5,
    name: "Carrots",
    purchased: false
  },
  {
    id: 6,
    name: "Juice",
    purchased: true
  }
];

function App() {
  return <List groceries={groceries} />;
}

export default App;
```

### Main Entry Point (`main.jsx`)

```javascript
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
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
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the rendered grocery list.

---

## Expected Behavior

1. The application renders a styled list of grocery items using Bootstrap.
2. The `List` component dynamically generates list items based on the `groceries` array.
3. React's `key` attribute ensures efficient rendering and updates.

---

## Summary

This project showcases how to create and use React functional components with props to build a dynamic and reusable list. It integrates Bootstrap for styling and demonstrates best practices for handling lists in React.
