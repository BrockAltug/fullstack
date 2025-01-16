# Overview

This project demonstrates the implementation of state reducers in a React application for managing a list of students. The reducer handles actions such as adding and removing students, providing a centralized state management approach.

# Key Features

- Centralized state management using a reducer function.
- Actions for adding and removing students.
- Comprehensive test cases for reducer actions.
- Integration with a React component for seamless state updates.

# Concepts Covered

- State reducers in React.
- Action types and payloads for state management.
- Unit testing for reducers using `Vitest`.
- Component and context integration with reducers.

# Installation and Usage

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Run tests:**
   ```bash
   npm run test
   ```

# Example Usage

### Reducer File (`utils/reducers.js`)

The reducer manages state updates based on actions.

```javascript
import { ADD_STUDENT, REMOVE_STUDENT } from "./actions";

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case REMOVE_STUDENT:
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
```

### Test File (`Reducers.test.jsx`)

```javascript
import reducer from "../utils/reducers";
import { ADD_STUDENT, REMOVE_STUDENT } from "../utils/actions";

const initialState = {
  students: [
    { id: 1, name: "Test Student 1", major: "Major 1" },
    { id: 2, name: "Test Student 2", major: "Major 2" },
  ],
  majors: ["Mathematics", "Computer Science", "Art"],
};

test("ADD_STUDENT", () => {
  const newState = reducer(initialState, {
    type: ADD_STUDENT,
    payload: { id: 3, name: "Test Student 3", major: "Major 3" },
  });

  expect(initialState.students.length).toBe(2);
  expect(newState.students.length).toBe(3);
});

test("REMOVE_STUDENT", () => {
  const newState = reducer(initialState, {
    type: REMOVE_STUDENT,
    payload: 1,
  });

  expect(initialState.students.length).toBe(2);
  expect(newState.students.length).toBe(1);
});
```

# Technologies Included

- **React 18**: Component-based UI development.
- **Vite**: Modern development environment.
- **Vitest**: Unit testing for state reducers.
- **ESLint**: Code linting for clean and maintainable code.

# Summary

This project showcases the use of state reducers for centralized state management in a React application. The implementation supports dynamic updates, ensuring a scalable and testable solution for managing state transitions.

# Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Documentation](https://redux.js.org/)
- [Vitest Documentation](https://vitest.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Documentation](https://eslint.org/)
