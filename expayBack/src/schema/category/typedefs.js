// NOTE : User type imported from types folder
export const category = `
type Category {
    id: ID!
    name: String!
  }
  `
const typeDefs = /* GraphQL */ `
  schema {
    query: Query
  }

  type Query {
    categories: [Category!]!
    category(id: ID!): Category
    searchCategory(q: String!): [Category!]!
  }


  # ---

  ${category}


`

export default typeDefs
