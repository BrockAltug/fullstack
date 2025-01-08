const { Class } = require('../models');

// Resolvers define the logic for handling GraphQL queries and mutations.
// This object maps schema fields (defined in typeDefs) to functions
// that resolve data for those fields.
const resolvers = {
  Query: {
    // The 'classes' resolver corresponds to the 'classes' query in the schema.
    // It handles requests to fetch a list of all Class objects from the database.
    classes: async () => {
      // Executes a database query using the Class model to retrieve all documents
      // in the Class collection. Returns an array of Class objects.
      return await Class.find({});
    },
  },
};

module.exports = resolvers;