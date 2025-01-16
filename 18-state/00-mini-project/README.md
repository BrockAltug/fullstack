# Digital Garage - A Redux-Powered Car Management App

## Overview

The Digital Garage project is a state management mini-project that demonstrates the use of Redux with React for managing a list of cars. Users can dynamically add cars, toggle their running status, and view car details in a centralized digital garage.

## Key Features

- **Add Cars**: Dynamically add cars with make, model, and year details.
- **Toggle Engine State**: Start and stop cars using Redux actions.
- **Centralized State Management**: Manage all car data using a Redux store.
- **React Integration**: Connect Redux with React components for a seamless user interface.

## Concepts Covered

- State management using Redux.
- React-Redux integration for dispatching actions and accessing global state.
- Functional components with hooks like `useState`, `useDispatch`, and `useSelector`.
- Modular structure with separate reducers, actions, and store setup.
- Dynamic UI updates based on Redux state changes.

## Installation and Usage

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your system.
- **npm**: Comes bundled with Node.js for managing dependencies.

### Steps to Run

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Run the Development Server:**

   ```bash
   npm run dev
   ```

3. **Build for Production:**

   ```bash
   npm run build
   ```

4. **Preview the Production Build:**
   ```bash
   npm run preview
   ```

### Features in Action

- Open your browser at `http://localhost:3000`.
- Add a new car by entering its make, model, and year, then click "Add Car."
- Toggle the car's engine state to start or stop it.
- View car details including its ID, make, model, year, and engine state.

## Code Walkthrough

### CarComponent

The `CarComponent` renders the list of cars and provides UI for adding new cars and toggling their engine state.

```jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { START_CAR, STOP_CAR, ADD_CAR } from "../utils/actions";

export default function CarComponent() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [newCarMake, setNewCarMake] = useState("");
  const [newCarModel, setNewCarModel] = useState("");
  const [newCarYear, setNewCarYear] = useState("");

  return (
    <>
      <h1>Digital Garage</h1>
      <section className="car-input">
        <div>
          <div className="add-car">
            Add a car:
            <input
              value={newCarMake}
              onChange={(e) => setNewCarMake(e.target.value)}
              placeholder="New car make..."
              type="text"
            />
            <input
              value={newCarModel}
              onChange={(e) => setNewCarModel(e.target.value)}
              placeholder="New car model..."
              type="text"
            />
            <input
              value={newCarYear}
              onChange={(e) => setNewCarYear(e.target.value)}
              placeholder="New car year..."
              type="text"
            />
            <button
              onClick={() =>
                dispatch({
                  type: ADD_CAR,
                  payload: {
                    make: newCarMake,
                    model: newCarModel,
                    year: newCarYear,
                  },
                })
              }
            >
              Add Car
            </button>
          </div>
        </div>
      </section>
      <section className="car-list">
        {state.cars.map((car) => (
          <div key={car.id} id={car.id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {car.model} <br />
              <span style={{ fontSize: "1rem" }}>
                This car was manufactured in {car.year}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{car.make}</p>
              <code>Car ID: {car.id}</code>
            </div>
            <span style={{ fontSize: "1rem" }}>
              {car.isRunning ? "Car is running 🏎️" : "Car is off 💤"}
              <button
                onClick={() =>
                  dispatch({
                    type: car.isRunning ? STOP_CAR : START_CAR,
                    payload: car.id,
                  })
                }
              >
                Toggle Engine
              </button>
            </span>
          </div>
        ))}
      </section>
    </>
  );
}
```

### Reducer

The reducer manages state transitions based on dispatched actions.

```javascript
import { ADD_CAR, START_CAR, STOP_CAR } from "./actions";
import createId from "./createId";

const initialState = {
  cars: [
    { id: 1, make: "Honda", model: "Civic", year: "2008", isRunning: false },
    { id: 2, make: "Tesla", model: "Y", year: "2021", isRunning: false },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAR:
      const newCarId = createId(state.cars);
      const newCar = { ...action.payload, id: newCarId };
      return {
        ...state,
        cars: [...state.cars, newCar],
      };

    case START_CAR:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload ? { ...car, isRunning: true } : car
        ),
      };

    case STOP_CAR:
      return {
        ...state,
        cars: state.cars.map((car) =>
          car.id === action.payload ? { ...car, isRunning: false } : car
        ),
      };

    default:
      return state;
  }
}
```

## Technologies Included

- **React 18**: UI development.
- **Redux**: State management.
- **React-Redux**: Integration of Redux with React.
- **Vite**: Modern development environment.
- **ESLint**: Code linting and quality assurance.

## Summary

The Digital Garage project is an excellent demonstration of managing complex state using Redux and React. It provides a hands-on approach to adding, updating, and managing dynamic data, making it ideal for learning state management in modern web development.

## Resources

- [React Redux Documentation](https://react-redux.js.org/introduction/getting-started)
- [Redux Documentation](https://redux.js.org/)
- [Vite Documentation](https://vitejs.dev/guide/)
