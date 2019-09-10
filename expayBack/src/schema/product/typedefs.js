// NOTE : User type imported from types folder
import {category} from '../category/typedefs'
const typeDefs = /* GraphQL */ `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
    searchProduct(q: String!): [Product!]!
    productByUserID(userId: String!): [Product]
    productByCategory(idCategory: String!): [Product]
  }

  type Mutation {
    editProduct(id: ID!, data: EditProductInput!): Product!
  }

  # ---

  type Product {
    id: ID!
    name: String!
    price: String!
    userId: String!
    img: String
    details: String
    category: Category
  }

  input EditProductInput {
    name: String
    price: String
    img: String
    details: String
    
  }
 
`

export default () =>  [category, typeDefs]
