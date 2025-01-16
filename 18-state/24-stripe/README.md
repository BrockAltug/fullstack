# Overview

This project demonstrates the integration of Stripe for payment processing in a MERN stack application. Users can add items to a cart, calculate totals, and securely checkout using Stripe's API. The backend handles the creation of checkout sessions, while the frontend manages cart state and redirects users to Stripe's hosted checkout page.

# Key Features

- **Stripe Integration**: Secure payment processing using Stripe Checkout.
- **Dynamic Cart Management**: Add, remove, and update items in the shopping cart.
- **GraphQL Integration**: Queries and mutations for handling product data and checkout sessions.
- **IDB Integration**: Offline cart data persistence using IndexedDB.
- **User Authentication**: Checkout is only available to authenticated users.

# Concepts Covered

- Stripe checkout session creation.
- Frontend integration with `@stripe/stripe-js`.
- Backend integration with `stripe` Node.js library.
- State management using React Context API and Reducer.
- GraphQL queries and mutations for checkout functionality.

# Installation and Usage

1. **Install MongoDB:**
   Ensure MongoDB is installed and running. Follow the [MongoDB installation guide](https://www.mongodb.com/docs/manual/installation/) for setup instructions.

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Seed the database:**

   ```bash
   npm run seed
   ```

4. **Run the development server:**

   ```bash
   npm run develop
   ```

5. **Build the project for production:**
   ```bash
   npm run build
   ```

# Example Usage

### Cart Component

The `Cart` component manages the cart state, calculates totals, and initializes the Stripe checkout process.

```jsx
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { useStoreContext } from "../../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import "./style.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    getCheckout({
      variables: { products: [...state.cart] },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {state.cart.length ? (
        <div>
          {state.cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your cart yet!
        </h3>
      )}
    </div>
  );
};

export default Cart;
```

### Resolvers

The backend resolver handles the creation of Stripe checkout sessions.

```javascript
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const line_items = args.products.map((product) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
            images: [`${url}/images/${product.image}`],
          },
          unit_amount: product.price * 100,
        },
        quantity: product.purchaseQuantity,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
};
```

# Technologies Included

- **Stripe**: Payment processing API.
- **React 18**: Frontend framework for building user interfaces.
- **GraphQL**: Query language for APIs.
- **MongoDB**: NoSQL database for storing cart and user data.
- **Apollo Client**: GraphQL client for querying and mutating data.
- **Express**: Backend server framework.

# Summary

This project integrates Stripe for seamless payment processing in an e-commerce application. By combining Stripe's secure checkout, a GraphQL backend, and React's dynamic frontend capabilities, the project ensures a robust shopping experience.

# Resources

- [Stripe Documentation: Checkout](https://stripe.com/docs/payments/checkout)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [GraphQL Documentation: Queries](https://graphql.org/learn/queries/)
- [MongoDB Documentation: CRUD Operations](https://www.mongodb.com/docs/manual/crud/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
