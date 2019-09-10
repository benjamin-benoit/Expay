import React from 'react';
import HomeScreen from './screens/Home';
import UserScreen from './screens/User';
import AddProduct from './screens/AddProduct'
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
  AddProduct: {
    screen: AddProduct,
  },
}, {
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
