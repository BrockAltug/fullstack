
# ESLint Integration and Code Formatting

## Overview

This project demonstrates the use of **ESLint** to enforce consistent code formatting and styling rules in a JavaScript codebase. The provided `example.js` script includes intentional issues that violate the rules defined in `.eslintrc.json`. ESLint can be used to identify and correct these issues.

---

## Key Features

1. **ESLint Integration**:
   - Uses ESLint to enforce coding standards and identify formatting and styling issues.

2. **Error Identification**:
   - Highlights areas of code that violate the rules specified in `.eslintrc.json`.

3. **Automatic Fixes**:
   - Provides an option to automatically fix issues using ESLint's `--fix` option.

---

## Expected Behavior

- The code in [`example.js`](Unsolved/example.js) should pass all rules defined in the `.eslintrc.json` configuration file.
- No red annotations should appear in the code editor when ESLint is active.
- Running `npm run lint` or `npx eslint **/*.js --fix` should resolve all errors automatically.

---

## Setup Instructions

1. **Install ESLint**:

   ```bash
   npm install eslint
   ```

2. **Install ESLint Extension in VS Code**:
   - [Download and install the ESLint extension for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

3. **Set Up the Project**:
   - Ensure `.eslintrc.json` is present in the project directory with the desired rules.
   - Install project dependencies:
     ```bash
     npm install
     ```

4. **Run ESLint**:
   - To identify issues:
     ```bash
     npx eslint **/*.js
     ```
   - To fix issues automatically:
     ```bash
     npx eslint **/*.js --fix
     ```

---

## Steps to Test

1. **Open the Code in VS Code**:
   - Open `example.js` in the editor.
   - You may see red underlines indicating ESLint rule violations.
   - Hover over these annotations to view detailed error messages.

2. **Run ESLint**:
   - From the terminal, run:
     ```bash
     npx eslint **/*.js
     ```
   - A list of errors and warnings will be displayed.

3. **Fix Errors Automatically**:
   - Run:
     ```bash
     npx eslint **/*.js --fix
     ```
   - ESLint will attempt to automatically fix issues where possible.

4. **Verify Fixes**:
   - Re-run ESLint to confirm no issues remain.

---

## Example Commands

### Identifying Issues:
```bash
npx eslint **/*.js
```

### Automatically Fixing Issues:
```bash
npx eslint **/*.js --fix
```

---

## Summary

This project demonstrates the use of ESLint to maintain a clean and consistent codebase. By integrating ESLint into your development workflow, you can ensure that your team's code adheres to a common style guide, improving readability and maintainability.
