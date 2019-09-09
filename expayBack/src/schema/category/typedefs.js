// NOTE : User type imported from types folder

const typeDefs = /* GraphQL */ `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
    searchProduct(q: String!): [Product!]!
  }

  type Mutation {
    editProduct(id: ID!, data: EditProductInput!): Product!
  }

  # ---

  type Product {
    id: ID!
    name: String!
  }

  input EditProductInput {
    name: String
  }

`

export default typeDefs
