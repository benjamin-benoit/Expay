import React from 'react';
import HomeScreen from './screens/Home';
import EditProduct from './screens/EditProduct'
import ProductDetails from './screens/ProductDetails'
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  ProductDetails: {
    screen: ProductDetails,
  },
  EditProduct: {
    screen: EditProduct,
  },
}, {
  initialRouteName: 'Home',
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack
  }
}, {
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
