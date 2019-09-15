import React, {useState} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import RootNavigator from './src/navigator';
import SafeAreaView from "react-native-safe-area-view";

const client = new ApolloClient({
    uri: 'http://98126681.ngrok.io/'
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
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <RootNavigator/>
            </SafeAreaView>
        </ApolloProvider>
    )
}

export default App;
