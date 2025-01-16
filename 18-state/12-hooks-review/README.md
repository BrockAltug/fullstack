# Overview

This project showcases the use of React hooks (`useState` and `useEffect`) for managing state and handling side effects. It includes a feature to fetch and display a list of issues from the GitHub repository `facebook/react`.

# Key Features

- State management with `useState`.
- Fetching data from an API using `useEffect`.
- Controlled side effects with dependency arrays.
- Passing state as props to child components.

# Concepts Covered

- `useState` for creating and updating state variables.
- `useEffect` for handling side effects like data fetching.
- Dependency arrays in `useEffect` to control re-renders.
- Prop drilling to pass state to child components.

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

### App Component

The `App` component fetches a list of issues from the GitHub API and displays them using the `IssueList` component.

```jsx
import { useState, useEffect } from "react";
import IssueList from "./components/IssueList";

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getRepoIssues("facebook/react");
  }, []);

  const getRepoIssues = (repo) => {
    let issuesURL = `https://api.github.com/repos/${repo}/issues?direction=asc`;
    fetch(issuesURL)
      .then((res) => res.json())
      .then((response) => setIssues(response));
  };

  return (
    <div className="container">
      <h2 className="header">GitHub issues for 'facebook/react'</h2>
      <span className="text-primary">
        Stored in state variable <code>issues</code>
      </span>
      <hr />
      <div className="ui grid">
        <div className="row">
          <div className="col-11">
            <IssueList issues={issues} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

# Technologies Included

- **React 18**: Component-based UI library.
- **Vite**: Development and build tool.
- **GitHub API**: Data source for issues.
- **ESLint**: Code quality and linting tool.

# Summary

This project provides a practical example of using React hooks to manage state and handle side effects. By leveraging `useState` and `useEffect`, developers can create dynamic, data-driven components while maintaining clean and efficient code.

# Resources

- [React Documentation: useState](https://reactjs.org/docs/hooks-reference.html#usestate)
- [React Documentation: useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
- [Vite Documentation](https://vitejs.dev/guide/)
- [GitHub API Documentation](https://docs.github.com/en/rest)
- [ESLint Documentation](https://eslint.org/)
