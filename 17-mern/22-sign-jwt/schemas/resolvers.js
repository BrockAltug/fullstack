// Importing User and Thought models from the '../models' directory
const { User, Thought } = require('../models');

// Importing signToken function and AuthenticationError from the authentication utility
const { signToken, AuthenticationError } = require('../utils/auth');

// Define resolvers for GraphQL queries and mutations
const resolvers = {
  Query: {
    // Retrieves all users and populates their associated thoughts
    users: async () => {
      return User.find().populate('thoughts');
    },
    // Retrieves a single user by their username and populates their associated thoughts
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('thoughts');
    },
    // Retrieves all thoughts, optionally filtered by a username, sorted by creation date (descending)
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {}; // Add filter if a username is provided
      return Thought.find(params).sort({ createdAt: -1 });
    },
    // Retrieves a single thought by its ID
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    // Adds a new user, generates a token, and returns the token and user data
    addUser: async (parent, args) => {
      const user = await User.create(args); // Creates a new user with the provided arguments
      const token = signToken(user); // Generates an authentication token for the user

      return { token, user }; // Returns the token and user data
    },
    // Logs in a user by verifying their email and password, then returns a token and user data
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }); // Finds a user by their email

      if (!user) {
        throw AuthenticationError; // Throws an error if the user does not exist
      }

      const correctPw = await user.isCorrectPassword(password); // Checks if the provided password matches the stored hash

      if (!correctPw) {
        throw AuthenticationError; // Throws an error if the password is incorrect
      }

      const token = signToken(user); // Generates a token for the authenticated user
      return { token, user }; // Returns the token and user data
    },
    // Adds a new thought and associates it with a user
    addThought: async (parent, { thoughtText, thoughtAuthor }) => {
      const thought = await Thought.create({ thoughtText, thoughtAuthor }); // Creates a new thought

      // Updates the associated user's thought list by adding the new thought's ID
      await User.findOneAndUpdate(
        { username: thoughtAuthor },
        { $addToSet: { thoughts: thought._id } }
      );

      return thought; // Returns the newly created thought
    },
    // Adds a comment to a specific thought
    addComment: async (parent, { thoughtId, commentText, commentAuthor }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId }, // Finds the thought by its ID
        {
          $addToSet: { comments: { commentText, commentAuthor } }, // Adds the comment to the thought's comment list
        },
        {
          new: true, // Returns the updated document
          runValidators: true, // Validates the updated data against the schema
        }
      );
    },
    // Removes a thought by its ID
    removeThought: async (parent, { thoughtId }) => {
      return Thought.findOneAndDelete({ _id: thoughtId }); // Deletes the thought from the database
    },
    // Removes a specific comment from a thought
    removeComment: async (parent, { thoughtId, commentId }) => {
      return Thought.findOneAndUpdate(
        { _id: thoughtId }, // Finds the thought by its ID
        { $pull: { comments: { _id: commentId } } }, // Removes the comment with the specified ID
        { new: true } // Returns the updated document
      );
    },
  },
};

// Exporting the resolvers to be used in the GraphQL server
module.exports = resolvers;