const typeDefs = `
  # The Class type defines the structure of a Class object in the GraphQL schema.
  # It includes fields such as:
  # - _id: The unique identifier for a Class (ID type).
  # - name: The name of the Class (String type).
  # - building: The building where the Class is held (String type).
  # - creditHours: The number of credit hours for the Class (Integer type).
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # The Query type defines the entry points for fetching data in the GraphQL API.
  # - classes: This query retrieves a list of all Class objects, returning an array of Class types.
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;