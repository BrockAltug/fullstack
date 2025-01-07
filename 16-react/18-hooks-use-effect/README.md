# React Thermostat with useEffect

## Overview

This project demonstrates the use of React's `useEffect` hook to dynamically update the document title based on the application's state. It includes a simple thermostat interface for increasing and decreasing the temperature.

---

## Key Features

1. **Dynamic Document Title**:

   - The `useEffect` hook updates the document's title to reflect the current temperature in real time.

2. **State Management**:

   - Utilizes React's `useState` hook to manage the thermostat's temperature.

3. **Event Handling**:

   - Includes buttons to increase or decrease the temperature with appropriate handlers.

4. **Responsive Design**:
   - Styled with Bootstrap for a clean and user-friendly interface.

---

## Concepts Covered

1. **useEffect Hook**:

   - Understand how to perform side effects in functional components.
   - Learn how dependency arrays control the execution of effects.

2. **useState Hook**:

   - Practice managing and updating state dynamically.

3. **Event Handlers**:

   - Implement functions to handle user interactions, such as button clicks.

4. **Dynamic Rendering**:
   - Explore real-time updates to both the DOM and browser document title.

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
   - Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the thermostat.

---

## Expected Behavior

1. The thermostat interface displays the current temperature.
2. Clicking "Raise temperature" increases the temperature by 1°F.
3. Clicking "Lower temperature" decreases the temperature by 1°F.
4. The document title dynamically updates to reflect the current temperature.

---

## Summary

This project demonstrates how to effectively use React's `useEffect` hook to manage side effects and React's `useState` hook for dynamic state updates. It highlights the importance of dependency arrays in controlling re-render behavior and side effect execution.
