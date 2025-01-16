# Overview

This project demonstrates the use of actions and reducers for state management in a React application. The `CategoryMenu` component dynamically updates categories using GraphQL queries and Redux-like reducers for state transitions. The application utilizes IndexedDB for offline data persistence and React Context for global state management.

# Key Features

- **Actions and Reducers**: Centralized state management with a reducer to handle complex state updates.
- **GraphQL Integration**: Querying categories dynamically from the server.
- **IndexedDB Integration**: Offline data storage for categories.
- **React Context**: Provides global state access across components.
- **Dynamic UI Updates**: Reactively updates the category menu and cart.

# Concepts Covered

- Centralized state management with reducers.
- Efficient offline-first strategy using IndexedDB.
- GraphQL integration for fetching data.
- React Context for avoiding prop drilling.
- Dynamic updates in UI components based on state changes.

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

### CategoryMenu Component

The `CategoryMenu` component interacts with the global state and updates categories dynamically.

```jsx
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise("categories", "put", category);
      });
    } else if (!loading) {
      idbPromise("categories", "get").then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
      <button
        onClick={() => {
          handleClick("");
        }}
      >
        All
      </button>
    </div>
  );
}

export default CategoryMenu;
```

### Reducer

The reducer function handles state transitions based on action types.

```javascript
import {
  UPDATE_PRODUCTS,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_MULTIPLE_TO_CART,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_CART,
  TOGGLE_CART,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
      };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case CLEAR_CART:
      return {
        ...state,
        cartOpen: false,
        cart: [],
      };

    case TOGGLE_CART:
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    default:
      return state;
  }
};
```

# Technologies Included

- **React 18**: Component-based UI library.
- **Apollo Client**: GraphQL client for data fetching.
- **GraphQL**: Query language for APIs.
- **IndexedDB**: Offline data storage.
- **React Context**: Global state management.

# Summary

This project demonstrates the implementation of actions and reducers to manage complex state transitions in a React application. By leveraging IndexedDB, Apollo Client, and React Context, it ensures dynamic and offline-first user experiences.

# Resources

- [React Documentation: Context](https://reactjs.org/docs/context.html)
- [Redux Documentation: Reducers](https://redux.js.org/usage/structuring-reducers/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
- [GraphQL Documentation](https://graphql.org/learn/)
