import React from 'react';
import HomeScreen from './screens/Home';
import UserDetails from './screens/UserDetails';
import UserFormik from './screens/UserFormik';
import EditUser from './screens/EditUser';
import EditProduct from './screens/EditProduct';
import ProductDetails from './screens/ProductDetails';
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
  UserDetails: {
    screen: UserDetails,
  },
  UserFormik: {
    screen: UserFormik,
  },
  EditUser: {
    screen: EditUser,
  },
}, {
  initialRouteName: 'UserFormik',
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack
  },
  UserDetails: {
    screen: UserDetails
  }
}, {
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
