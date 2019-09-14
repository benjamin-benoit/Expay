import gql from 'graphql-tag';

export const EDIT_USER = gql`
  mutation editUser($id: ID!, $data: EditUserInput!) {
    editUser(id: $id, data: $data) {
      id
			firstName
			lastName
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation editProduct($id: ID!, $data: EditProductInput!) {
    editproduct(id: $id, data: $data) {
      name
      price
        category
      details
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct($data: AddProductInput!) {
    editUser(data: $data) {
			name
      price
      userID
      img
      category
    }
  }
`;

export const STORE_USER_EXPO_TOKEN = gql`
  mutation storeUserExpoToken($token: String!) {
    storeUserExpoToken(token: $token) {
      success
    }
  }
`;

export const SEND_NOTIFICATION = gql`
  mutation sendNotification($token: String!) {
    sendNotification(token: $token) {
      success
    }
  }
`;
