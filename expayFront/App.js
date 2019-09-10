import React, {useState} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import RootNavigator from './src/navigator';

const client = new ApolloClient({
    uri: 'http://a0230791.ngrok.io/',
});

const App = () => {
    const [isLoadingComplete, setLoadingComplete] = useState(false);

    async function loadResourcesAsync() {
        await Promise.all([
            Asset.loadAsync([
                require('./assets/icon.png'),
                require('./assets/splash.png'),
            ]),
        ])
    }

    return (
        <ApolloProvider client={client}>
            <RootNavigator/>
        </ApolloProvider>
    )
}

export default App;
