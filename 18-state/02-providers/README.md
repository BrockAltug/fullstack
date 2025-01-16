### README: React State Management with Context Providers

---

## Overview

This project demonstrates state management in **React** using the Context API. It uses a custom **Student Context Provider** to manage and distribute state across the application, allowing for scalable and maintainable state sharing.

---

## Key Features

1. **Context API Integration**:

   - Centralized state management for application-wide data access.

2. **Custom Hooks**:

   - `useStudentContext` simplifies state consumption for components.

3. **Provider Implementation**:

   - `StudentProvider` initializes and distributes student data using React's Context API.

4. **Reusable State**:
   - Flexible state distribution for any React component wrapped by the provider.

---

## Concepts Covered

1. **React Context API**:

   - Create a shared state container for React applications.

2. **Custom Hooks**:

   - Build reusable hooks to simplify state access and enhance readability.

3. **State Distribution**:

   - Use the `StudentProvider` to distribute state to nested components efficiently.

4. **Scalability**:
   - Manage state in a scalable way for applications with multiple consumers.

---

## Installation and Usage

### **1. Prerequisites**

- **Node.js** installed on your system.
- A React project set up using `create-react-app` or similar.

### **2. Install Dependencies**

Run the following command to install the required Node.js modules:

```bash
npm install
```

### **3. Add the Student Context**

Ensure the `StudentProvider` wraps your application's component tree in `App.js`:

```javascript
import { StudentProvider } from "./utils/StudentContext";

function App() {
  return (
    <StudentProvider>
      <YourComponent />
    </StudentProvider>
  );
}

export default App;
```

---

## Example Usage

### **Accessing Context in a Component**

Use the `useStudentContext` hook to access the shared state in any child component:

```javascript
import { useStudentContext } from "./utils/StudentContext";

const StudentList = () => {
  const { students } = useStudentContext();

  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} - {student.major}
        </li>
      ))}
    </ul>
  );
};

export default StudentList;
```

### **Output Example**:

**Rendered List**:

```plaintext
1. Sayid - Computer Science
2. Sun-Hwa - Data Science
```

---

## Summary

This project highlights the simplicity and power of React's Context API for managing state. The `StudentProvider` centralizes data distribution, while the custom `useStudentContext` hook provides easy access to that data. This approach ensures maintainability and scalability for React applications.

---

## Resources

- [React Context API Documentation](https://reactjs.org/docs/context.html)
- [MDN Web Docs: React](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
