# Overview

This project defines a set of actions for managing state in a React application. Actions are constants that describe what changes need to be made to the state. These actions include adding, removing, and updating students, as well as managing majors in an educational application context.

# Key Features

- Comprehensive action definitions for handling students and majors.
- Constants to maintain consistent action type references.
- Modular action structure for scalability.

# Concepts Covered

- Action types in React state management.
- Documentation of payload requirements for each action.
- Use of constants to reduce errors in action handling.

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

# Actions Defined

### `ADD_STUDENT`

- **Description:** Adds a new student to the student array.
- **Payload:** A student object containing `name` and `major`.
- **Process:**
  - Generates a new ID for the student based on the last student's ID.
  - Pushes the new student to the end of the student array.
  - Updates the student array.

### `REMOVE_STUDENT`

- **Description:** Removes a student from the student array by ID.
- **Payload:** The ID of the student to be removed.
- **Process:**
  - Filters the student array to exclude the student with the matching ID.
  - Updates the student array.

### `UPDATE_STUDENT`

- **Description:** Updates the details of an existing student.
- **Payload:** An object containing the student ID and updated values for one or more parameters.
- **Process:**
  - Finds the student based on the ID.
  - Updates the student object in-place within a copy of the student array.
  - Updates the student array.

### `ADD_MAJOR`

- **Description:** Adds a new major to the majors array.
- **Payload:** A string representing the new major.
- **Process:**
  - Appends the new major to the end of the majors array.
  - Updates the majors array.

### `REMOVE_MAJOR`

- **Description:** Removes a major from the majors array.
- **Payload:** A string representing the major to be removed.
- **Process:**
  - Filters the majors array to exclude the specified major.
  - Updates the majors array.

# Technologies Included

- **React 18**: Component-based UI development.
- **Vite**: Development environment for modern web applications.
- **Vitest**: Testing framework for actions and reducers.
- **ESLint**: Linting tool for maintaining code quality.

# Summary

This project defines clear and well-documented actions for managing state in a React application. By using constants for action types, the application ensures consistency and reduces errors, making the codebase scalable and maintainable.

# Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Documentation](https://redux.js.org/)
- [Vitest Documentation](https://vitest.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Documentation](https://eslint.org/)
