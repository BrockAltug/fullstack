# Overview

This project demonstrates the use of state and context in a React component to manage a list of students and their majors. The `StudentList` component allows users to add and remove students dynamically, showcasing best practices in state management and component composition.

# Key Features

- Dynamic list of students with support for adding and removing entries.
- Context-based state management using a custom hook (`useStudentContext`).
- Input validation and controlled components for user inputs.
- Modular and reusable code structure.

# Concepts Covered

- React `useState` for managing component-level state.
- Custom hooks (`useStudentContext`) for shared state and actions.
- Controlled components for form elements.
- Mapping and rendering dynamic lists in React.

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

5. **Run tests:**
   ```bash
   npm run test
   ```

# Example Usage

The `StudentList` component provides a complete user interface for managing a list of students. Example:

```jsx
<StudentList />
```

- **Features:**
  - Displays a list of students with their ID, name, and major.
  - Input fields for adding new students with validation.
  - Button to remove a student from the list.

# Technologies Included

- **React 18**: For building the user interface.
- **Vite**: Fast development environment.
- **Vitest**: Testing framework for React components.
- **ESLint**: Code linting to ensure best practices.

# Summary

This project illustrates how to effectively manage state in a React application using hooks and context. The `StudentList` component is designed to be interactive, extensible, and maintainable, making it a great example for learning and practical usage.

# Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Vitest Documentation](https://vitest.dev/)
- [ESLint Documentation](https://eslint.org/)
