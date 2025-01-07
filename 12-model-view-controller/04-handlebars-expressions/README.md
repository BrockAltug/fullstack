
# Handlebars.js Expressions: Dynamic Rendering Example

## Overview

This project demonstrates how to use **Handlebars.js Expressions** to dynamically render content in a simple dish card. Handlebars.js provides an easy way to insert dynamic data into HTML templates, making it ideal for building dynamic and reusable UI components.

---

## Key Features

1. **Dynamic Data Binding**:
   - Uses Handlebars.js expressions (`{{}}`) to dynamically insert data into HTML.

2. **Reusable Templates**:
   - The `dish.handlebars` template is designed to render individual dish cards dynamically.

---

## Concepts Covered

1. **Handlebars.js Expressions**:
   - Insert dynamic values into HTML using curly braces (`{{expression}}`).

2. **Dynamic Rendering**:
   - Render content dynamically based on the data passed to the template.

---

## Application Structure

### **Files and Functionality**

1. **`views/dish.handlebars`**:
   - Template for rendering individual dish cards dynamically.
   - Includes:
     - `{{dish_name}}`: Renders the name of the dish.
     - `{{description}}`: Renders the description of the dish.

2. **Example Handlebars.js Expression**:
   ```handlebars
   {{dish_name}}
   ```
   - Dynamically inserts the name of the dish into the template.

3. **Usage in a Parent Template**:
   - The `dish.handlebars` file can be included or iterated over within a parent Handlebars.js template for rendering multiple dish cards.

---

## Expected Behavior

1. **Render Dish Card**:
   - Displays the name and description of a dish dynamically.

2. **Dynamic Data**:
   - Replaces placeholders (`{{dish_name}}` and `{{description}}`) with actual data passed to the template.

---

## Example Template

### `dish.handlebars`
```handlebars
<div class="dish-card">
  <div class="dish-card-header">
    {{dish_name}}
  </div>
  <div class="card-body">
    <p>
      Description:
      {{description}}
    </p>
  </div>
</div>
```

### Example Data

```json
{
  "dish_name": "French Bread with Brie Cheese",
  "description": "A delightful combination of freshly baked French bread and creamy brie cheese."
}
```

### Rendered Output

```html
<div class="dish-card">
  <div class="dish-card-header">
    French Bread with Brie Cheese
  </div>
  <div class="card-body">
    <p>
      Description:
      A delightful combination of freshly baked French bread and creamy brie cheese.
    </p>
  </div>
</div>
```

---

## Summary

This project highlights the power of Handlebars.js expressions for dynamic data rendering. By using simple expressions like `{{dish_name}}`, developers can create reusable and dynamic templates that simplify UI development.
