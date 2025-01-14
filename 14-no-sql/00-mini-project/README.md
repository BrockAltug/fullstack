# NoSQL Student-Course Management Backend

## Overview

This NoSQL Mini Project demonstrates how to implement a database system using **MongoDB** and **Mongoose** to manage students and courses. The project includes the creation of subdocuments, the use of CRUD operations, and seeding the database with data. The API exposes RESTful routes for seamless interaction with the database.

---

## Key Features

- **Subdocuments**:
  - Students contain subdocuments for assignments.
  - Courses reference students via ObjectId relationships.
- **CRUD Operations**:

  - Full implementation of Create, Read, Update, and Delete functionalities for both students and courses.

- **Database Seeding**:

  - Seed script to populate the database with sample students, courses, and assignments.

- **RESTful API**:

  - Routes for managing students, courses, and assignments.

- **Virtuals**:
  - Schema virtuals to compute derived properties such as `getTags` for applications.

---

## Concepts Covered

1. **Subdocuments**:

   - Embedding assignment documents in student records.

2. **Relationships**:

   - Referencing students within courses using MongoDB's `ObjectId`.

3. **Schema Design**:

   - Use of Mongoose schema features such as virtuals, default values, and validation.

4. **Database Seeding**:

   - Automating data population using a custom seed script.

5. **RESTful Routes**:
   - Structured routes for efficient interaction with the database.

---

## Installation and Usage

### **1. Install Dependencies**

```bash
npm install
```

### **2. Seed the Database**

Run the seed script to populate the database with sample data:

```bash
npm run seed
```

### **3. Start the Server**

For production:

```bash
npm start
```

For development with live reload:

```bash
npm run dev
```

### **4. Test the API**

Use tools like **Postman** or **curl** to interact with the API at `http://localhost:3001`.

---

## Example Usage

### Endpoints Overview:

1. **Courses:**

   - `GET /api/courses` - Retrieve all courses.
   - `GET /api/courses/:courseId` - Retrieve a single course by ID.
   - `POST /api/courses` - Create a new course.
   - `PUT /api/courses/:courseId` - Update an existing course.
   - `DELETE /api/courses/:courseId` - Delete a course.

2. **Students:**
   - `GET /api/students` - Retrieve all students.
   - `GET /api/students/:studentId` - Retrieve a single student by ID.
   - `POST /api/students` - Create a new student.
   - `DELETE /api/students/:studentId` - Delete a student.
   - `POST /api/students/:studentId/assignments` - Add an assignment to a student.
   - `DELETE /api/students/:studentId/assignments/:assignmentId` - Remove an assignment.

---

## Technologies Included

- **MongoDB**: Database used to store and manage data.
- **Mongoose**: ODM for MongoDB, simplifying schema creation and validation.
- **Express.js**: Framework to set up RESTful API routes.
- **Nodemon**: Development tool for automatic server restarts.
- **Node.js**: Runtime for executing JavaScript on the server.

---

## Summary

This project serves as a foundational example of implementing NoSQL database systems with Mongoose. It demonstrates best practices for schema design, subdocument management, and efficient data manipulation using RESTful APIs.

---

## Resources

- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/)
- [Nodemon Documentation](https://nodemon.io/)
