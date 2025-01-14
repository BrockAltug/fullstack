# React Testing

## Overview

This project demonstrates how to effectively test React components using Vitest and the React Testing Library. The primary focus is on writing and maintaining robust tests to ensure components render correctly and match their intended behavior. This project also covers snapshot testing for React components to verify their output structure.

---

## Key Features

- **Component Rendering Tests**: Ensure React components render properly with all required props.
- **Snapshot Testing**: Verify that the structure of rendered components remains consistent across changes.
- **Interactive Test Environment**: Utilize Vitest's dev mode for instant feedback during development.
- **Test Coverage for Edge Cases**: Validate component behavior under various scenarios, such as missing props or empty datasets.
- **Continuous Updates**: Includes commands to update snapshots seamlessly.

---

## Concepts Covered

1. **React Testing Library Basics**:

   - Rendering components in isolation.
   - Querying rendered elements.
   - Validating component behavior with assertions.

2. **Snapshot Testing**:

   - Using the `pretty` package for formatted snapshot testing.
   - Automating snapshot updates.

3. **Error Handling in Tests**:

   - Handling missing or invalid props.
   - Verifying fallback behavior for edge cases.

4. **Testing with Vitest**:
   - Running tests in watch mode for iterative development.
   - Utilizing Vitest’s built-in snapshot testing capabilities.

---

## Installation and Usage

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

1. Run all tests:
   ```bash
   npm test
   ```
2. Update outdated snapshots:
   ```bash
   npm test -- -u
   ```

### File Structure

```plaintext
26-testing/
├── src/
│   ├── components/
│   │   ├── IssueItem.jsx
│   │   ├── IssueList.jsx
│   │   └── SearchBar.jsx
│   ├── tests/
│   │   ├── IssueItem.test.jsx
│   │   ├── IssueList.test.jsx
│   │   └── SearchBar.test.jsx
├── __snapshots__/
│   ├── IssueItem.test.jsx.snap
│   ├── IssueList.test.jsx.snap
│   └── SearchBar.test.jsx.snap
└── package.json
```

---

## Example Usage

### Testing a Component

To test the `IssueItem` component:

1. Open `src/tests/IssueItem.test.jsx`.
2. Ensure that the component renders properly:

   ```javascript
   import pretty from "pretty";
   import { render } from "@testing-library/react";
   import IssueItem from "../components/IssueItem";

   const issue = {
     url: "https://api.github.com/repos/microsoft/vscode/issues/68",
     html_url: "https://github.com/microsoft/vscode/issues/68",
     id: 117635943,
     title: "Git: Support git history in VSCode",
   };

   describe("IssueItem", () => {
     it("should render and match snapshot", () => {
       const { container } = render(<IssueItem issue={issue} />);
       const html = pretty(container.innerHTML);
       expect(html).toMatchSnapshot();
     });
   });
   ```

---

## Technologies Included

- **React**: For creating modular and reusable components.
- **Vitest**: A modern, fast test runner for React applications.
- **React Testing Library**: For rendering and querying components in tests.
- **pretty**: To format HTML output for snapshot testing.

---

## Summary

This project provides a hands-on approach to testing React components with modern tools. By focusing on rendering, snapshots, and interactive testing, you can confidently ship high-quality code to production.

---

## Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Pretty NPM Package](https://www.npmjs.com/package/pretty)
