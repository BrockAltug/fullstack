# MVC with Handlebars.js: Built-In Helpers

## Overview

This project demonstrates the use of **built-in helpers** in Handlebars.js for creating dynamic, conditional, and iterative templates. By leveraging helpers like `#each` and `#if`, this project showcases how to build flexible and reusable UI components within the **MVC** architecture.

---

## Key Features

1. **Dynamic Iteration**:

   - Uses the `#each` helper to iterate over an array of dishes and render them dynamically.

2. **Conditional Rendering**:

   - Implements the `#if` helper to conditionally display content based on the presence of specific data.

3. **Integration with MVC**:
   - Combines the power of Handlebars.js helpers with the separation of concerns provided by the MVC framework.

---

## Concepts Covered

1. **Handlebars.js Helpers**:

   - `#each`: Iterates over arrays to generate repeated elements dynamically.
   - `#if`: Conditionally renders content based on a truthy or falsy condition.

2. **MVC Architecture**:
   - Demonstrates the integration of helpers within a structured Model-View-Controller application.

---

## Application Structure

### **Files and Functionality**

1. **`views/all.handlebars`**:

   - Renders all dishes in the menu using the `#each` helper.
   - Displays dish IDs and names dynamically.

2. **`views/dish.handlebars`**:
   - Renders individual dish cards.
   - Uses the `#if` helper to conditionally display whether a dish contains nuts.

---

## Example Templates

### **`views/all.handlebars`**

```handlebars
<div class="menu-container">
  <div class="card-header col-md-10">
    <h2>
      &#127869 Current Menu
    </h2>
  </div>
  {{#each dishes as |dish|}}
    <div class="dish col-md-5">
      <p>
        {{dish.id}}.
        {{dish.dish_name}}
      </p>
    </div>
    <div class="col-md-7">
      <p></p>
    </div>
  {{/each}}
</div>
```

### **`views/dish.handlebars`**

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
    {{#if has_nuts}}
      <p class="has-nuts">
        Contains Nuts
      </p>
    {{/if}}
  </div>
</div>
```

---

## Example Data

### Dishes Array (Used in `views/all.handlebars`):

```json
[
  {
    "id": 1,
    "dish_name": "French Bread with Brie Cheese"
  },
  {
    "id": 2,
    "dish_name": "Tropical Fruit Salad"
  }
]
```

### Individual Dish Object (Used in `views/dish.handlebars`):

```json
{
  "dish_name": "Pork Gyoza",
  "description": "Delicious dumplings filled with pork and cabbage.",
  "has_nuts": true
}
```

---

## Rendered Output

### **All Dishes (`views/all.handlebars`)**

```html
<div class="menu-container">
  <div class="card-header col-md-10">
    <h2>
      &#127869 Current Menu
    </h2>
  </div>
  <div class="dish col-md-5">
    <p>
      1. French Bread with Brie Cheese
    </p>
  </div>
  <div class="col-md-7">
    <p></p>
  </div>
  <div class="dish col-md-5">
    <p>
      2. Tropical Fruit Salad
    </p>
  </div>
  <div class="col-md-7">
    <p></p>
  </div>
</div>
```

### **Single Dish (`views/dish.handlebars`)**

```html
<div class="dish-card">
  <div class="dish-card-header">Pork Gyoza</div>
  <div class="card-body">
    <p>Description: Delicious dumplings filled with pork and cabbage.</p>
    <p class="has-nuts">Contains Nuts</p>
  </div>
</div>
```

---

## Summary

This project highlights the use of Handlebars.js built-in helpers (`#each` and `#if`) for rendering dynamic and conditional content. These features make Handlebars.js a powerful tool for building reusable and maintainable templates within the MVC architecture.
