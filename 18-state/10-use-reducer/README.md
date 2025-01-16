# Overview

This project demonstrates the use of the `useReducer` hook in React for managing complex state and state transitions in a scalable and predictable manner. The `StudentList` component provides an interactive UI for managing students and their majors, utilizing actions and a reducer function to update the state.

# Key Features

- State management with the `useReducer` hook for better control and scalability.
- Centralized reducer to handle state transitions based on dispatched actions.
- Dispatching actions directly from the component for dynamic updates.
- Integration of controlled components for form inputs.

# Concepts Covered

- React `useReducer` hook for managing state.
- Action dispatching for triggering state transitions.
- Centralized state logic with a reducer function.
- Controlled components for handling user inputs.

# Installation and Usage

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd solved
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Run tests:**
   ```bash
   npm run test
   ```

# Example Usage

### `StudentList` Component

The `StudentList` component manages the list of students and their respective majors using `useReducer`.

```jsx
import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  SET_STUDENT_NAME,
  SET_STUDENT_MAJOR,
} from "../utils/actions";

import { useStudentContext } from "../utils/StudentContext";

export default function StudentList() {
  const [state, dispatch] = useStudentContext();

  return (
    <div>
      {state.students ? (
        <section className="student-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Major</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {state.students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.major}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: REMOVE_STUDENT,
                          payload: student.id,
                        })
                      }
                    >
                      ✖️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="add-student">
            <input
              value={state.studentName}
              onChange={(e) =>
                dispatch({ type: SET_STUDENT_NAME, payload: e.target.value })
              }
              placeholder="New student name..."
              type="text"
            />

            <select
              value={state.studentMajor}
              onChange={(e) =>
                dispatch({ type: SET_STUDENT_MAJOR, payload: e.target.value })
              }
            >
              <option>Choose major...</option>
              {state.majors.map((major) => (
                <option key={major} value={major}>
                  {major}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: ADD_STUDENT,
                  payload: {
                    name: state.studentName,
                    major: state.studentMajor,
                  },
                })
              }
            >
              Add Student
            </button>
          </div>
        </section>
      ) : (
        <span>No students available!</span>
      )}
    </div>
  );
}
```

# Technologies Included

- **React 18**: Component-based UI library.
- **Vite**: Development and build tool.
- **ESLint**: Code quality and linting tool.

# Summary

This project demonstrates an effective use of the `useReducer` hook for managing complex state in a React application. By centralizing state logic in a reducer, the application becomes more predictable, scalable, and easier to maintain.

# Resources

- [React Documentation: useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [Vite Documentation](https://vitejs.dev/guide/)
- [ESLint Documentation](https://eslint.org/)
