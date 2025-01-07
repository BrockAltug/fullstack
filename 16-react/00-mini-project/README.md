# React Bucket List Application

## Overview

This project demonstrates a simple **React Bucket List Application** that allows users to manage their bucket list items dynamically. It includes features to add, edit, delete, and mark items as complete, showcasing React's state management, conditional rendering, and reusable components.

---

## Key Features

1. **Dynamic Bucket List Management**:

   - Users can add new items to the list, edit existing items, mark items as complete, and delete items.

2. **Priority Levels**:

   - Items can be assigned a priority level (High, Medium, Low), which dynamically affects their styling.

3. **State Management**:

   - Uses React's `useState` hook to manage and update the application state.

4. **Reusable Components**:

   - Features modular components like `BucketForm`, `Bucket`, and `BucketList` for clean and maintainable code.

5. **Conditional Rendering**:

   - Renders components dynamically based on user actions, such as showing the edit form or toggling item completion.

---

## Concepts Covered

1. **State and Props**:

   - Manages state at the parent level and passes data and functions as props to child components.

2. **Dynamic Styling**:

   - Uses conditional classNames to style items based on their priority or completion status.

3. **Form Handling**:

   - Implements controlled components for handling user input.

4. **Array Manipulation**:

   - Demonstrates how to dynamically update, filter, and map arrays in state to manage the bucket list.

---

## Setup Instructions

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run the Application**:

   ```bash
   npm start
   ```

3. **View the Application**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser to interact with the app.

---

## Application Structure

### Components

1. **BucketForm**:

   - Handles adding and editing bucket list items.
   - Includes a dropdown for selecting priority levels.

2. **Bucket**:

   - Renders the list of items with options to mark as complete, edit, or delete.

3. **BucketList**:

   - Manages the state for the entire bucket list and connects `BucketForm` and `Bucket` components.

---

## Expected Behavior

1. **Add Items**:

   - Users can add new bucket list items with a title and priority level.

2. **Edit Items**:

   - Users can click the edit icon to update an item's details.

3. **Delete Items**:

   - Users can click the delete icon to remove an item from the list.

4. **Mark as Complete**:

   - Clicking an item toggles its completion status.

5. **Priority Levels**:

   - Items are styled dynamically based on their priority (`High`, `Medium`, `Low`).

---

## Summary

This project showcases the use of React for building a simple and dynamic bucket list application. It highlights key React concepts, including state management, conditional rendering, and reusable component architecture, making it a practical example for learning and applying React principles.
