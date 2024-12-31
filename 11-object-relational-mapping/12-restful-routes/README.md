# 🐛 Implement Routes Which Gracefully Handle Errors and Return Appropriate Status Codes

Work with a group to implement the following user story:

* As a developer, I want my code to use `async/await` to asynchronously support `GET`, `PUT` and `DELETE` requests for the `api/users/:id` route.

* As a developer, I want to use `try...catch` to properly catch errors when using `async` and `await`.

* As a developer, I want to return proper HTTP status codes and informational error messages.

## Acceptance Criteria

* It's done when the `api/users/:id` route asynchronously supports `GET`, `PUT` and `DELETE` requests.

* For each request type, it's done when:

  * The 200 status code is returned when there is no error with the request.

  * The 404 status code is returned along with the following message when the specified user does not exist in the database:

    {
      "message": "No user with this id!"
    }

  * The 500 status code is returned when there is an internal server error.

---

## 💡 Hints

How do we return HTTP status codes?

To test your `try...catch` code, use the URL `api/users/abc` to deliberately cause an error within your route handler.

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your group to further your knowledge:

* What are some other common HTTP status codes?

Use [Google](https://www.google.com) or another search engine to research this.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
