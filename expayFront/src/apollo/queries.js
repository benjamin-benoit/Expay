import gql from 'graphql-tag';

export const GET_USERS = gql`
  {
    users {
      lastName
    }
  }
`

export const GET_CATEGORIES = gql`
  {
      categories {
          name
      }
  }
`

export const GET_PRODUCTS = gql`
  {
    products {
      id
      name
      img
      price
      details
      category {
        id
        name
      }
    }
  }
`

export const GET_PRODUCT_BY_USER_ID = gql`
  query product($id: ID!) {
    productByUserID(userId: $id) {
      id
      name
      price
      userId
      img
      details
      category {
        id
        name
      }
    }
  }
`

export const GET_PRODUCT = gql`
  query product($id: ID!) {
    product(id: $id) {
      name
      price
      userId
      img
      details
      category {
        id
        name
      }
    }
  }
`

export const GET_USER = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      country
      phoneNumber
    }
  }
`

export const SEARCH_USER = gql`
  query xxx($q: String!) {
    search(q: $q) {
      id
      firstName
      lastName
    }
  }
`
