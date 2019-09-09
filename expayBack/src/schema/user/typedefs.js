// NOTE : User type imported from types folder

const typeDefs = /* GraphQL */ `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    search(q: String!): [User!]!
  }

  type Mutation {
    editUser(id: ID!, data: EditUserInput!): User!
    storeUserExpoToken(token: String!): StoreUserExpoTokenResponse!
    sendNotification(token: String!): StoreUserExpoTokenResponse!
  }

  # ---

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    country: String!
    phoneNumber: String!
  }

  input EditUserInput {
    firstName: String
    lastName: String
    country: String
    phoneNumber: String
  }

  type StoreUserExpoTokenResponse {
    success: Boolean!
  }

`

export default typeDefs
