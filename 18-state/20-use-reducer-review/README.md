# Overview

This project demonstrates the use of the `useReducer` hook in React for managing complex state and actions. The `StudentList` component allows users to manage a list of students and their majors dynamically. The state is centralized using a reducer, and context is used for efficient state sharing across components.

# Key Features

- Centralized state management with `useReducer`.
- Context API for providing state and dispatch to child components.
- Actions for adding/removing students and adding majors.
- Dynamic reactivity to state updates with controlled components.

# Concepts Covered

- `useReducer` for complex state transitions.
- Custom context and provider setup.
- Controlled forms with React.
- Prop drilling avoidance with React Context.
- Dynamic rendering of lists based on state changes.

# Installation and Usage

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

3. **Build the project for production:**

   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```

# Example Usage

### StudentList Component

The `StudentList` component uses the `useStudentContext` hook to access state and dispatch actions.

```jsx
import { useState } from "react";
import { ADD_STUDENT, REMOVE_STUDENT, ADD_MAJOR } from "../utils/actions";
import { useStudentContext } from "../utils/StudentContext";

export default function StudentList() {
  const [state, dispatch] = useStudentContext();
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentMajor, setNewStudentMajor] = useState("");
  const [newMajorName, setNewMajorName] = useState("");

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

          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({
                type: ADD_STUDENT,
                payload: { name: newStudentName, major: newStudentMajor },
              });
              setNewStudentName("");
              setNewStudentMajor("");
            }}
          >
            <input
              value={newStudentName}
              onChange={(e) => setNewStudentName(e.target.value)}
              placeholder="New student name..."
            />
            <select
              value={newStudentMajor}
              onChange={(e) => setNewStudentMajor(e.target.value)}
            >
              <option>Choose major...</option>
              {state.majors.map((major) => (
                <option key={major} value={major}>
                  {major}
                </option>
              ))}
            </select>
            <button type="submit">Add Student</button>
          </form>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({
                type: ADD_MAJOR,
                payload: newMajorName,
              });
              setNewMajorName("");
            }}
          >
            <input
              value={newMajorName}
              onChange={(e) => setNewMajorName(e.target.value)}
              placeholder="New major name..."
            />
            <button type="submit">Add Major</button>
          </form>
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
- **React Context API**: State management and sharing.
- **React Reducer Hook (`useReducer`)**: For state transitions.
- **Vite**: Development and build tool for modern web applications.
- **ESLint**: Code quality and linting tool.

# Summary

This project illustrates the use of `useReducer` and Context API to manage state effectively in a React application. By separating state logic from components, it demonstrates a scalable and maintainable approach to managing dynamic state transitions.

# Resources

- [React Documentation: useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [React Documentation: Context](https://reactjs.org/docs/context.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [ESLint Documentation](https://eslint.org/)
