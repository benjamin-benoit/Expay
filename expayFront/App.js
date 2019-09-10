import React, { useEffect } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import RootNavigator from './src/navigator';

const client = new ApolloClient({
  uri: 'http://4d840da4.ngrok.io',
});

const App = () => (
  <ApolloProvider client={client}>
    <RootNavigator />
  </ApolloProvider>
)

export default App;
