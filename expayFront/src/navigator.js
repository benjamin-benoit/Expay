import React from 'react';
import HomeScreen from './screens/Home';
import UserScreen from './screens/User';
import EditProduct from './screens/EditProduct'
import ProductDetails from './screens/ProductDetails'
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  User: {
    screen: UserScreen,
  }
}, {
  initialRouteName: 'Home',
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack
  },
  EditProduct: {
    screen: EditProduct,
  },
  ProductDetails: {
    screen: ProductDetails,
  },
}, {
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
