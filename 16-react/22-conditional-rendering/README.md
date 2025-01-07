# React Conditional Rendering with NavTabs

## Overview

This project demonstrates the use of conditional rendering in React to dynamically display components based on the current state. It features a navigation bar (`NavTabs`) that highlights the active page and a portfolio container that renders the corresponding content dynamically.

---

## Key Features

1. **Dynamic Component Rendering**:

   - The application renders different page components (`Home`, `About`, `Blog`, `Contact`) based on the active state.

2. **State Management**:

   - Uses React's `useState` hook to track the currently active page.

3. **Props Handling**:

   - Passes the `currentPage` and `handlePageChange` as props to the `NavTabs` component for dynamic navigation.

4. **Conditional Class Application**:

   - Dynamically applies CSS classes to indicate the active navigation tab.

5. **Reusable Components**:
   - Features modular and reusable components, including `NavTabs` and individual page components.

---

## Concepts Covered

1. **useState Hook**:

   - Manage the active page state and trigger component re-renders.

2. **Props and Event Handling**:

   - Pass data and event handlers between parent and child components for interactivity.

3. **Conditional Rendering**:

   - Dynamically render components or apply classes based on state values.

4. **Dynamic Class Application**:

   - Use ternary operators to conditionally apply CSS classes for styling.

5. **Component Reusability**:
   - Build reusable and maintainable components with clearly defined responsibilities.

---

## Setup Instructions

1. **Install Dependencies**:

   - Run `npm install` to set up the project and install required dependencies.

2. **Run the Application**:

   - Start the application using:
     ```bash
     npm start
     ```

3. **View the Application**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser to explore the navigation and conditional rendering.

---

## Expected Behavior

1. The navigation bar highlights the active tab.
2. Clicking a navigation tab updates the active page state.
3. The corresponding page component is rendered dynamically below the navigation bar.

---

## Summary

This project highlights React's capabilities for building dynamic and interactive UIs using state and conditional rendering. It demonstrates best practices for component-based architecture, state management, and reusable code.
